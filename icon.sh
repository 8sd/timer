#!/bin/sh

echo "You're about to set the svg-image :'$1' as favion..."
echo "This script has to be started in the root directory of the vue-application"
echo -n "Do you want to continue? [y]/n "

read answer

if [ "$answer" == "n" ] || [ "$answer" == "N" ] ; then
  echo "Aborted by user"
  exit 0
fi

if ! which convert &> /dev/null ; then
  echo "Convert is not installed"
  exit 1
fi 

convert -background none -resize 192x192 $1 public/img/icons/android-chrome-192x192.png
convert -background none -resize 512x512 $1 public/img/icons/android-chrome-512x512.png
convert -background none -resize 192x192 $1 public/img/icons/android-chrome-maskable-192x192.png
convert -background none -resize 512x512 $1 public/img/icons/android-chrome-maskable-512x512.png
convert -resize 60x60 $1 public/img/icons/apple-touch-icon-60x60.png
convert -resize 76x76 $1 public/img/icons/apple-touch-icon-76x76.png
convert -resize 120x120 $1 public/img/icons/apple-touch-icon-120x120.png
convert -resize 152x152 $1 public/img/icons/apple-touch-icon-152x152.png
convert -resize 180x180 $1 public/img/icons/apple-touch-icon-180x180.png
convert -resize 180x180 $1 public/img/icons/apple-touch-icon.png
convert -background none -resize 16x16 $1 public/img/icons/favicon-16x16.png
convert -background none -resize 32x32 $1 public/img/icons/favicon-32x32.png
convert -background none -resize 144x144 $1 public/img/icons/msapplication-icon-144x144.png
convert -background none -resize 150x150 $1 public/img/icons/mstile-150x150.png
cp $1 public/img/icons/safari-pinned-tab.svg

echo "Done"
exit 0
