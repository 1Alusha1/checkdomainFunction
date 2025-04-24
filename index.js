(async () => {
  try {
    console.log("✅ Проверка началась")
    const response = await fetch(
      'https://dnscheckerapi.onrender.com/check-domains'
    );
    const data = await response.text();
    console.log('✅ Ответ от сервера:', data);
  } catch (err) {
    console.error('❌ Ошибка при отправке запроса:', err);
    process.exit(1); // важно, чтобы GitHub Action знал, что был фейл
  }
})();
