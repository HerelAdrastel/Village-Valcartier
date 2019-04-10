#!/bin/bash

source='public_html/template.html'
dest='public_html/index.html'

echo "Fichier source: $source"
echo "Fichier destinataire $dest"

echo '' > $dest

# Debut
line_to_replace=`grep -n '<!-- IMAGES -->' $source | cut -d: -f 1`
head -n $line_to_replace $source >> $dest

# Generation de l'HTML
for image in `ls public_html/images/sortie`
do
    image='images/sortie/'$image
    tag='<a href="'$image'" data-lightbox="Gallery"><img src="'$image'" alt="Valcartier Image"></a>'
    echo '                '$tag >> $dest
done

# Fin de l'html
tail -n +$(($line_to_replace + 1)) $source >> $dest

echo "Création de l'archive"
cd public_html/images
zip -r photos.zip sortie
mv photos.zip ..

echo "Terminé !"
