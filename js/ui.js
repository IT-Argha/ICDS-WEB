function updateResultGrid(elementId, headers, values) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';

    // Add headers
    const headerDiv = document.createElement('div');
    headerDiv.className = 'grid-headers';
    headerDiv.style.gridTemplateColumns = `repeat(${headers.length}, 1fr)`;
    headers.forEach(header => {
        const div = document.createElement('div');
        div.textContent = header;
        headerDiv.appendChild(div);
    });
    container.appendChild(headerDiv);

    // Add values
    const valuesDiv = document.createElement('div');
    valuesDiv.className = 'grid-values';
    valuesDiv.style.gridTemplateColumns = `repeat(${values.length}, 1fr)`;
    values.forEach(value => {
        const div = document.createElement('div');
        div.textContent = value.toFixed(2);
        valuesDiv.appendChild(div);
    });
    container.appendChild(valuesDiv);
}

function displayResults(results, isSection1) {
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('totalBeneficiaries').textContent = results.totalBeneficiaries;

    // Update egg costs
    updateResultGrid('eggCosts', 
        ['গর্ভবতী ও প্রসূতি', 'অপুষ্ট শিশু', 'সাধারণ শিশু', 'ডিমের মোট খরচ'],
        [results.eggCosts.pregnant, results.eggCosts.severe, results.eggCosts.general, results.eggCosts.total]
    );

    // Update vegetable/potato costs
    const vegetableTitle = document.getElementById('vegetableTitle');
    vegetableTitle.textContent = isSection1 ? 'অনন্যা ও আলুর খরচ' : 'সব্জী, সয়াবিন এর বরাদ্দ';
    updateResultGrid('vegetableCosts',
        ['গর্ভবতী ও প্রসূতি', 'অপুষ্ট শিশু', 'সাধারণ শিশু', isSection1 ? 'অনন্যা ও আলুর মোট খরচ' : 'সব্জী, সয়াবিন এর বরাদ্দ'],
        [results.vegetableCosts.pregnant, results.vegetableCosts.severe, results.vegetableCosts.general, results.vegetableCosts.total]
    );

    // Update combined total title and value
    const combinedTotalTitle = document.getElementById('combinedTotalTitle');
    combinedTotalTitle.textContent = isSection1 ? 
        'ডিম, আলু ও অন্যান্যর মোট খরচ' : 
        'ডিম সব্জী এবং সয়াবিন - এর মোট খরচ';
    document.getElementById('combinedTotal').textContent = 
        (results.eggCosts.total + results.vegetableCosts.total).toFixed(2);

    // Update morning snacks
    updateResultGrid('morningSnacks',
        ['সাধারণ শিশু', 'অপুষ্ট শিশু'],
        [results.morningSnacks.general, results.morningSnacks.severe]
    );

    // Update chatu sugar costs
    updateResultGrid('chatuSugarCosts',
        ['সাধারণ শিশুর খরচ', 'অপুষ্ট শিশুর খরচ'],
        [results.chatuSugarCosts.general, results.chatuSugarCosts.severe]
    );

    document.getElementById('chatuSugarTotal').textContent = results.chatuSugarCosts.total.toFixed(2);
    document.getElementById('grandTotal').textContent = results.grandTotal.toFixed(2);
}

function clearResults() {
    document.getElementById('pregnant').value = '';
    document.getElementById('severe').value = '';
    document.getElementById('general').value = '';
    document.getElementById('results').classList.add('hidden');
}