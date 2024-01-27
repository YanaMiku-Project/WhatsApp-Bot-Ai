<p align="center"><img src="https://iili.io/JuQuHMv.jpg" alt="YanaMiku - Bot WhatsApp"></p>

<h1 align="center">YanaMiku - BOTz (YanaMiku-Project)</h1>
<em><h5 align="center">(Bot WhatsApp Simple By Iyuzaki Yanagi)</h5></em>
 
 
 # Kontak Creator

 Untuk pertanyaan apa pun mengenai perizinan atau penggunaan, silakan hubungi pemilik proyek
 - [ Email ](mailto:support@yanamiku.shop).
 - [ WhatsApp ](https://wa.me/6285793589243?text=Hallo). 
 - [ Group ](https://chat.whatsapp.com/HzaF888SGaMJhEq24wP29B).
 - [ Infomation ](https://whatsapp.com/channel/0029VaI3mdy3AzNSbIXT9C3L)

 Dengan menggunakan atau berinteraksi dengan proyek ini, Anda setuju untuk terikat oleh syarat dan ketentuan lisensi ini.

# Donate Links

<b>QRIS</b>: <code>https://i.ibb.co/YpbzFYy/Screenshot-20230417-051902.png</code></br>
**satu untuk semua, sedikit apapun donasi kamu sangat berharga ❤️**

 ## Terimakasih

---

 # Requirements

- [x] NodeJS >= 18
- [x] FFMPEG
- [x] Server vCPU/RAM 1/2GB (Min)

---

# Configuration

There are 2 configuration files namely ```.env``` and ```config.json```, adjust them before installing.

```Javascript
{
   "database": "database", // nama database
   "ram_limit": "500mb", // ram limit server
   "cooldown": 3, // anti spam
   "timer": 180000, // waktu banned
   "timeout": 1800000, 
   "blocks": ["994", "91", "92"], // nomor auto block
   "evaluate_chars":  ["=>", "~>", "<", ">", "$"], // tidak boleh di ubah
   "pairing": {
      "state": true, // jika ingin code = true, jika ingin qr = false,
      "number": 62857935892434 // ubah menjadi nomor bot
   },
   "replit_url": ""
}
```

---

```.env
### Database : https://www.mongodb.com/
DATABASE_URL = ''

### Timezone (Important)
TZ = 'Asia/Jakarta'

### Clovyr : https://clovyr.io/
CLOVYR_APPNAME = ''
CLOVYR_URL = ''
CLOVYR_COOKIE = ''
```

---

# Run on Clovyr

Clovyr is a free cloud compute with vscode based for running bot with specifications of 2 CPU and 4GB RAM (idk storage size)

<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/879907dac646d1cb4c017.png" /></p>

with vscode it will be very easy to do recode and debugging scripts

<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/7e33c1e83a872f4f8d363.png" /></p>

**Notes** :
+ ```CLOVYR_APPNAME``` : application name on your clovyr

> Specifically for the 2 configurations below, you must carry out an inspect element using a computer to get cookies and keep-alive links

+ ```CLOVYR_URL``` : keep-alive link

+ ```CLOVYR_COOKIE``` : cookie from clovyr

---

# Pairing Code

Connecting account without qr scan but using pairing code.

<p align="center"><img align="center" width="100%" src="https://iili.io/JA6yGAQ.jpg" /></p>

```Javascript
{
   "pairing": {
      "state": true, // "true" if you want to use the pairing code
      "number": 62xxxx // start number with country code
   }
}
```
---

# Installation & Run

Make sure the configuration and server meet the requirements so that there are no problems during installation or when this bot is running, type this on your console :

```
$ yarn
$ node .
```

or want to use pm2

```
$ yarn
$ npm i -g pm2
$ pm2 start index.js && pm2 save && pm2 logs
```

---

# Command Install Bot Via Termux

 - [ Download Termux ](https://play.google.com/store/apps/details?id=com.termux)
 - [ Tutorial Video ](https://) 

## Instalasi
```
$ termux-setup-storage
```
```
$ pkg update && pkg upgrade
```
```
$ pkg install git
```
```
$ pkg install nodejs
```
```
$ pkg install ffmpeg
```
```
$ git clone https://github.com/YanaMiku-Project/WhatsApp-Bot-Ai
```

## Running
```
$ cd storage/downloads
```
```
$ cd WhatsApp-Bot-Ai
```
```
$ npm install
```
```
$ node .
```

---

# Tutorial Run
- [Run Termux](https://)
- [Run Panel](https://)

**Get Url MongoDb**
- [MongoDb](https://account.mongodb.com/account)
- [Tutorial](https://youtu.be/HhHzCfrqsoE?si=vRE2RoaAtfMlkPzH)

---

# Terimakasih Kepada
<p><img src="https://iili.io/JAtMHiX.jpg" width="70px" height="70px" alt="neoxr"></p>
<p><img src="https://iili.io/JAtOCPV.jpg" width="70px" height="70px" alt="github"></p>
