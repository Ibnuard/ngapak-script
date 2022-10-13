# Ngapak Script

Ngapak Script adalah bahasa pemrograman yang sangat simple, mudah, dan bersih, menggunakan bahasa Jawa Ngapak dan mduah di pahami. Ga jago ngoding juga bisa.

Terimakasih buat semuanya nggih :)

## Cara Pasang & Menjalankan

Install from npm
```bash
npm install -g ngapak-script
```

### Jalanin

Kalo udah install lewat npm kalian bisa langsung pake perintah `ngapak [ perintah ]`

```bash
ngapak gawe
```

Kalo udah nanti bakal muncul file bernama indeks.ngpk

## List Konten

* [Ngapak Script](#ngapak-script)
   * [Cara Pasang &amp; Menjalankan](#cara-pasang--menjalankan)
   * [Table Of Content](#list-konten)
   * [Example](#example)
   * [Command](#command)
  * [Disclaimer](#disclaimer)
   * [Showcase](#showcase)
      * [Highlight Text Editor](#highlight-text-editor)

[github-markdown-toc](https://github.com/ekalinin/github-markdown-toc)

## Example 

Example : 

```
literally umur itu 21
spill "Umur lu " + umur
kalo umur lebih gede 20
  spill "Elu tua"
  literally umurgua itu umur + 10
  spill "Kalo gua umurnya " + umurgua
  kalo umurgua lebih gede 30
    spill "gua lebih tua"
  udahan
kalogak
  spill "dasar bocil"
udahan
spill "Udahan ah"
```

```
literally jumlah itu 10
spill "Jumlah: " + jumlah

whichis jumlah itu 11
spill "Jumlah: " + jumlah

literally isHidup itu positive vibes
spill "is hidup :" + isHidup

fomo i endup 10
  kalo i lebih gede 3
    spill "loop ke " + i
  udahan
udahan
```

### Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.

- [List Command](Command.md)

### Disclaimer

This project just for fun, I don't want to hurt anyone. Just from idea "what if jaksel language is a programming language" and make it true. This project only for education purpose, not for production ready.

## Showcase

Some cool project from you, submit your project like highlight text, jaksel-to-js, etc. Make PR link to your repo !. Don't limit your creativity

### Highlight Text Editor
- [vim-jaksel](https://github.com/cocatrip/vim-jaksel) jaksel programming language plugin for (n)vim
