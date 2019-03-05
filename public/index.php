<?php

require '../vendor/autoload.php';

$loader = new Twig_Loader_Filesystem('.');
$twig = new Twig_Environment($loader);

$path = 'images/sortie/';
$images = scandir($path);
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