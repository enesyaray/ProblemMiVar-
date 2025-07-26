# Problem Mi Var? 🤔

Bu proje, kullanıcılara "Problem mi var?" sorusunu soran ve cevaplarına göre farklı mesajlar gösteren interaktif bir web uygulamasıdır.

## 🎯 Özellikler

- **Mavi Arkaplan**: Başlangıçta mavi arkaplan üzerinde çalışır
- **İnteraktif Sorular**: Evet/Hayır butonları ile cevap verilebilir
- **Dinamik Akış**: Cevaba göre farklı sorular ve mesajlar
- **Yeşil Geçiş**: Sonuç sayfasında arkaplan yeşile döner
- **Zamanlı Mesajlar**: 1 saniye sonra ek mesajlar belirir
- **Başa Dön Butonu**: Programı yeniden başlatma özelliği
- **Ziyaretçi Sayacı**: Siteye giren kişi sayısını takip eder

## 🚀 Kullanım

1. `index.html` dosyasını web tarayıcısında açın
2. "Problem mi var?" sorusuna cevap verin
3. Gerekirse ikinci soruya cevap verin
4. Sonuç mesajını görün
5. İsteğe bağlı olarak "Başa Dön" butonuna tıklayın

## 📱 Akış Senaryoları

### Senaryo 1: İlk soruda "Hayır"
- Arkaplan yeşile döner
- "O zaman problem yok" mesajı görünür

### Senaryo 2: İkinci soruda "Hayır"
- Arkaplan yeşile döner
- "O zaman problem yok" mesajı görünür
- 1 saniye sonra "Yapabileceğin bir şey yok" mesajı belirir

### Senaryo 3: İkinci soruda "Evet"
- Arkaplan yeşile döner
- "O zaman problem yok" mesajı görünür
- 1 saniye sonra "O zaman çöz gitsin" mesajı belirir

## 🛠️ Teknolojiler

- HTML5
- CSS3 (Animasyonlar ve geçişler)
- JavaScript (ES6+)
- LocalStorage (Ziyaretçi sayacı için)

## 📊 Ziyaretçi Sayacı

- Sağ üst köşede görünür
- LocalStorage kullanarak sayıyı kaydeder
- Her sayfa yenilemesinde artar
- Responsive tasarım ile mobil uyumlu

## 🎨 Tasarım Özellikleri

- Modern ve temiz arayüz
- Hover efektleri
- Yumuşak geçiş animasyonları
- Responsive tasarım
- Glassmorphism efektleri

## 📁 Dosya Yapısı

```
├── index.html      # Ana HTML dosyası
├── style.css       # CSS stilleri
├── script.js       # JavaScript fonksiyonları
└── README.md       # Proje açıklaması
```

## 🌐 Canlı Demo

Projeyi GitHub Pages'te yayınlayabilir veya doğrudan `index.html` dosyasını tarayıcıda açabilirsiniz.

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**Not**: Ziyaretçi sayacı LocalStorage kullanır, bu nedenle sadece aynı tarayıcıda çalışır. Farklı tarayıcılar veya cihazlar için ayrı sayaçlar tutulur. 