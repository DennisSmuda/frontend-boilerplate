# Frontend Boilerplate

Clickdummy Frontend Boilerplate

Webpack build (ES6 / PostCSS) + Pug Templating


**Included Defaults**
> - jQuery
> - Barba.js
> - GSAP
> - PostCSS
>   - CSSNext
>   - AutoPrefixer
>   - Custom Media Queries
>      - --viewport-phone-small  : (max-width : 320px)
>      - --viewport-phone        : (max-width : 400px),
>      - --viewport-phone-wide   : (max-width : 480px),
>      - --viewport-phablet      : (max-width : 560px),
>      - --viewport-tablet-small : (max-width : 640px),
>      - --viewport-tablet       : (max-width : 768px),
>      - --viewport-tablet-wide  : (max-width : 1024px),
>      - --viewport-desktop      : (max-width : 1250px),
>      - --viewport-desktop-wide : (max-width : 1250px),
>      - --viewport-desktop-huge : (min-width : 1920px),

![screenshot](public/screen.png)


## Installing
**Clone Repo**
```
git clone git@bitbucket.org:volldigital/voll-frontend.git
```
**Install Dependencies**
```
yarn install
```

## Developing
**Build JS/CSS**
```
yarn start
```
**Watch templates directory**
```
yarn templates
```

## Production Build
**Minify/Uglify**
```
yarn run prod
```
