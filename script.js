let currentQuestion = 1;
const totalQuestions = 2;
let secondAnswer = null;

function handleAnswer(answer) {
    if (currentQuestion === 1) {
        // İlk soru: "Problem mi var?"
        if (answer === 'no') {
            // Hayır seçilirse direkt sonuç göster
            showResult();
        } else {
            // Evet seçilirse ikinci soruya geç
            currentQuestion = 2;
            document.getElementById('question-text').textContent = 'Çözüm var mı?';
        }
    } else if (currentQuestion === 2) {
        // İkinci soru: "Çözüm var mı?"
        secondAnswer = answer;
        showResult();
    }
}

function showResult() {
    // Arka planı yeşil yap
    document.body.classList.add('green-bg');
    
    // Soru container'ını gizle
    document.getElementById('question-container').style.display = 'none';
    
    // Sonuç container'ını göster
    document.getElementById('result-container').style.display = 'block';
    
    // Eğer ikinci soruya cevap verildiyse, 1 saniye sonra ek mesaj göster
    if (secondAnswer === 'no') {
        setTimeout(() => {
            const additionalMessage = document.createElement('p');
            additionalMessage.textContent = 'Yapabileceğin bir şey yok';
            additionalMessage.style.fontSize = '1.5rem';
            additionalMessage.style.marginTop = '1rem';
            additionalMessage.style.opacity = '0';
            additionalMessage.style.transition = 'opacity 0.5s ease';
            
            document.getElementById('result-container').appendChild(additionalMessage);
            
            // Mesajı yavaşça görünür yap
            setTimeout(() => {
                additionalMessage.style.opacity = '1';
            }, 100);
        }, 1000);
    } else if (secondAnswer === 'yes') {
        setTimeout(() => {
            const additionalMessage = document.createElement('p');
            additionalMessage.textContent = 'O zaman çöz gitsin';
            additionalMessage.style.fontSize = '1.5rem';
            additionalMessage.style.marginTop = '1rem';
            additionalMessage.style.opacity = '0';
            additionalMessage.style.transition = 'opacity 0.5s ease';
            
            document.getElementById('result-container').appendChild(additionalMessage);
            
            // Mesajı yavaşça görünür yap
            setTimeout(() => {
                additionalMessage.style.opacity = '1';
            }, 100);
        }, 1000);
    }
    
    // Başa dön butonunu göster (2 saniye sonra)
    setTimeout(() => {
        showRestartButton();
    }, 2000);
}

// Başa dön butonunu göster
function showRestartButton() {
    // Eğer zaten varsa tekrar oluşturma
    if (document.getElementById('restart-btn')) return;
    
    const restartButton = document.createElement('button');
    restartButton.id = 'restart-btn';
    restartButton.textContent = 'Başa Dön';
    restartButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
        border: 2px solid white;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        opacity: 0;
    `;
    
    restartButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        this.style.transform = 'translateX(-50%) scale(1.05)';
    });
    
    restartButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        this.style.transform = 'translateX(-50%) scale(1)';
    });
    
    restartButton.addEventListener('click', restartApp);
    
    document.body.appendChild(restartButton);
    
    // Butonu yavaşça görünür yap
    setTimeout(() => {
        restartButton.style.opacity = '1';
    }, 100);
}

// Uygulamayı başa döndür
function restartApp() {
    currentQuestion = 1;
    secondAnswer = null;
    document.body.classList.remove('green-bg');
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('question-text').textContent = 'Problem mi var?';
    
    // Önceki ek mesajları temizle
    const resultContainer = document.getElementById('result-container');
    const additionalMessages = resultContainer.querySelectorAll('p');
    additionalMessages.forEach(msg => msg.remove());
    
    // Başa dön butonunu kaldır
    const restartButton = document.getElementById('restart-btn');
    if (restartButton) {
        restartButton.remove();
    }
}



// Sayfa yüklendiğinde başlangıç durumunu ayarla
document.addEventListener('DOMContentLoaded', function() {
    currentQuestion = 1;
    secondAnswer = null;
    document.body.classList.remove('green-bg');
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('question-text').textContent = 'Problem mi var?';
    
    // Önceki ek mesajları temizle
    const resultContainer = document.getElementById('result-container');
    const additionalMessages = resultContainer.querySelectorAll('p');
    additionalMessages.forEach(msg => msg.remove());
    
    // Başa dön butonunu kaldır
    const restartButton = document.getElementById('restart-btn');
    if (restartButton) {
        restartButton.remove();
    }
}); 