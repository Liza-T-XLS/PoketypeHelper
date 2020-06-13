<?php

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Type;

class MainController extends AbstractController
{ 
    /**
    * @Route("/", name="index")
    */
    public function index() {

        $typesModel = new Type();
        $types = $typesModel->getTypes();
        
        return $this->render('main/index.html.twig', [
            'types' => $types,
        ]);
    }
}