<?php

$errors = [];

if (!isset($_POST['summn']) || (trim($_POST['summn']) == '')) {
    $errors[] = 'сумма вклада';
}

if (!isset($_POST['date']) || (trim($_POST['date']) == '')) {
    $errors[] = 'срок вклада';
}

if (!isset($_POST['date_start']) || (trim($_POST['date_start']) == '')) {
    $errors[] = 'дата оформления вклада';
}

if (empty($errors)) {

    $summ_n = $_POST['summn'];
    $summ_add = isset($_POST['added']) && $_POST['added'] ? $_POST['summadd'] : false;
    $days_n = $_POST['date'] * 12 * 30;
    $percent = 10;
    $days_y = date("L", strtotime($_POST['date_start'])) ? 366 : 365;

    if ($summ_add) {
        $result = ($summ_n + $summ_add) * $days_n * ($percent / $days_y);
    } else {
        $result = $summ_n + ($summ_n * $percent * $days_n / $days_y) / 100;
    }
    echo json_encode(ceil($result));
} else {
    http_response_code(422);
    echo  json_encode($errors);
}
