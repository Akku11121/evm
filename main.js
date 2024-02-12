function castVote(partyName) {
    // Redirect to the voting page with the selected party name as a query parameter
    //const input = document.getElementById('selectedButton');
    const outputDiv = document.getElementById('displayData');

    outputDiv.textContent = partyName;

    outputDiv.style.fontSize = '500px';
    outputDiv.style.textAlign = 'center';

    document.querySelector('.input-screen').style.display = 'none';
    document.querySelector('.output-screen').style.display = 'block';
  }
