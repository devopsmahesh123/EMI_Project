function calculateEMI() {
  let amount = parseFloat(document.getElementById('loanAmount').value);
  let annualRate = parseFloat(document.getElementById('interestRate').value);
  let tenureYears = parseFloat(document.getElementById('loanTenure').value);

  if (isNaN(amount) || isNaN(annualRate) || isNaN(tenureYears)) {
    document.getElementById('emiSummary').innerHTML = '<p>Please enter valid values.</p>';
    document.getElementById('emiTable').innerHTML = '';
    return;
  }

  let monthlyRate = annualRate / 12 / 100;
  let tenureMonths = tenureYears * 12;

  let emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / 
            (Math.pow(1 + monthlyRate, tenureMonths) - 1);

  document.getElementById('emiSummary').innerHTML = `<h3>Monthly EMI: ₹${emi.toFixed(2)}</h3>`;

  let balance = amount;
  let totalInterest = 0;
  let totalPrincipal = 0;
  let totalPayment = 0;

  let table = `<table>
    <tr>
      <th>Month</th>
      <th>Principal (₹)</th>
      <th>Interest (₹)</th>
      <th>EMI (₹)</th>
      <th>Remaining Balance (₹)</th>
    </tr>`;

  for (let month = 1; month <= tenureMonths; month++) {
    let interest = balance * monthlyRate;
    let principal = emi - interest;
    balance -= principal;
    totalInterest += interest;
    totalPrincipal += principal;
    totalPayment += emi;

    table += `<tr>
      <td>${month}</td>
      <td>${principal.toFixed(2)}</td>
      <td>${interest.toFixed(2)}</td>
      <td>${emi.toFixed(2)}</td>
      <td>${balance > 0 ? balance.toFixed(2) : '0.00'}</td>
    </tr>`;
  }

  // Add final totals row
  table += `<tr style="font-weight: bold; background: #f9fafb;">
    <td>Total</td>
    <td>${totalPrincipal.toFixed(2)}</td>
    <td>${totalInterest.toFixed(2)}</td>
    <td>${totalPayment.toFixed(2)}</td>
    <td>0.00</td>
  </tr>`;

  table += `</table>`;
  document.getElementById('emiTable').innerHTML = table;
}

// Advanced Calculator
function appendValue(val) {
  document.getElementById('advDisplay').value += val;
}

function clearDisplay() {
  document.getElementById('advDisplay').value = '';
}

function calculate() {
  try {
    document.getElementById('advDisplay').value = eval(document.getElementById('advDisplay').value);
  } catch {
    document.getElementById('advDisplay').value = 'Error';
  }
}
