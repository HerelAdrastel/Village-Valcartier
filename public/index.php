<?php

require '../vendor/autoload.php';

// Chargement de Twig
$loader = new Twig_Loader_Filesystem('.');
$twig = new Twig_Environment($loader);

// Lecture du répertoire des images
$path = 'images/sortie/';
$images = scandir($path);

// Filtrage et recomposition du tableau
$images = array_diff($images, array('.', '..'));
$images = array_map(function($image) {
    global $path;
    return $path . $image;
}, $images);


try {
    echo $twig->render('app.html.twig', ['images' => $images]);
}
catch (Exception $e) {
    echo 'Erreur: ' . $e->getMessage();
}