<?php
session_start();

// Получаем данные из формы
$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
$haslo = filter_var(trim($_POST['haslo']), FILTER_SANITIZE_STRING);

// Проверка на пустые поля
if (empty($login) || empty($haslo)) {
    echo "Пожалуйста, заполните все поля.";
    exit();
}

// Подключение к базе
$mysql = new mysqli('localhost', 'root', '', 'vb_site');
if ($mysql->connect_error) {
    die("Ошибка подключения к базе данных: " . $mysql->connect_error);
}

// Поиск пользователя
$stmt = $mysql->prepare("SELECT id, haslo FROM users WHERE login = ?");
$stmt->bind_param("s", $login);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo "Пользователь не найден.";
    exit();
}

$user = $result->fetch_assoc();

// Проверка пароля
if (password_verify($haslo, $user['haslo'])) {
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['login'] = $login;

    // Переход на страницу после входа
    header("Location: page_global.html");
    exit();
} else {
    echo "Неверный пароль.";
}

$stmt->close();
$mysql->close();
?>
