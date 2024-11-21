document.getElementById('submit').addEventListener('click', function () {
    const q1 = document.getElementById('q1').value;
    const selectedOrder = [];
    for (let i = 1; i <= 13; i++) {
      selectedOrder.push(document.getElementById(`album${i}`).value);
    }
  
    const correctOrder = [
      "please_please_me",
      "with_the_beatles",
      "a_hard_days_night",
      "beatles_for_sale",
      "help",
      "rubber_soul",
      "revolver",
      "sgt_peppers",
      "magical_mystery_tour",
      "white_album",
      "yellow_submarine",
      "abbey_road",
      "let_it_be"
    ];
  
    const isCorrectOrder = selectedOrder.join(',') === correctOrder.join(',');
    const q3 = document.querySelector('input[name="q3"]:checked')?.value;
    const q4 = document.querySelector('input[name="q4"]:checked')?.value;
    const q5 = document.getElementById('q5').value.trim().toLowerCase();
  
    const correctAnswers = {
      q1: '45',
      q3: 'b',
      q4: 'd',
      q5: ['kxc4', 'cxc4']
    };
  
    let errors = [];
  
    if (q1 !== correctAnswers.q1) errors.push('1');
    if (!isCorrectOrder) errors.push('2');
    if (q3 !== correctAnswers.q3) errors.push('3');
    if (q4 !== correctAnswers.q4) errors.push('4');
    if (!correctAnswers.q5.includes(q5)) errors.push('5');
  
    const resultDiv = document.getElementById('result');
    if (errors.length === 0) {
      resultDiv.textContent = 'Parabéns! Aqui está o link: https://drive.google.com/file/d/1o7FuIglx6m3rUQNUu7QrWxzZbPorKmJO/view?usp=drive_link';
      resultDiv.className = 'success';
    } else {
      resultDiv.textContent = `Você errou as seguintes questões: ${errors.join(', ')}`;
      resultDiv.className = 'error';
    }
  });
  