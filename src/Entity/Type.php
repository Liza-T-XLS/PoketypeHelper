<?php

namespace App\Entity;

class Type {
    
private $types = [
    ['name' => 'normal',
    'weaknesses' => [
        'fighting',
        ],
    ],
    ['name' => 'fighting',
    'weaknesses' => [
        'flying',
        'psychic',
        'fairy',
        ],
    ],
    ['name' => 'flying',
    'weaknesses' => [
        'rock',
        'electric',
        'ice',
        ],
    ],
    ['name' => 'poison',
    'weaknesses' => [
        'ground',
        'psychic',
        ],
    ],
    ['name' => 'ground',
    'weaknesses' => [
        'water',
        'grass',
        'ice',
        ],
    ],
    ['name' => 'rock',
    'weaknesses' => [
        'fighting',
        'ground',
        'steel',
        'water',
        'grass',
        ],
    ],
    ['name' => 'bug',
    'weaknesses' => [
        'flying',
        'rock',
        'fire',
        ],
    ],
    ['name' => 'ghost',
    'weaknesses' => [
        'ghost',
        'dark',
        ],
    ],
    ['name' => 'steel',
    'weaknesses' => [
        'fighting',
        'ground',
        'fire',
        ],
    ],
    ['name' => 'fire',
    'weaknesses' => [
        'ground',
        'rock',
        'water',
        ],
    ],
    ['name' => 'water',
    'weaknesses' => [
        'grass',
        'electric',
        ],
    ],
    ['name' => 'grass',
    'weaknesses' => [
        'flying',
        'poison',
        'bug',
        'fire',
        'ice',
        ],
    ],
    ['name' => 'electric',
    'weaknesses' => [
        'ground',
        ],
    ],
    ['name' => 'psychic',
    'weaknesses' => [
        'bug',
        'ghost',
        'dark',
        ],
    ],
    ['name' => 'ice',
    'weaknesses' => [
        'fighting',
        'rock',
        'steel',
        'fire',
        ],
    ],
    ['name' => 'dragon',
        'weaknesses' => [
        'ice',
        'dragon',
        'fairy',
        ],
    ],
    ['name' => 'dark',
    'weaknesses' => [
        'fighting',
        'bug',
        'fairy',
        ],
    ],
    ['name' => 'fairy',
        'weaknesses' => [
        'poison',
        'steel',
        ],
    ],
];

    public function getTypes() {
        return $this->types;
    }
}