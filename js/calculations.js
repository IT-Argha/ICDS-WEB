const RATES = {
    section1: {
        egg: {
            pregnant: 6.50,
            severe: 6.50,
            general: 6.50
        },
        vegetable: {
            pregnant: 0.84,
            severe: 0,
            general: 0
        },
        chatuSugar: {
            general: 0,
            severe: 0
        }
    },
    section2: {
        egg: {
            pregnant: 6.50,
            severe: 0,
            general: 0
        },
        vegetable: {
            pregnant: 1.63,
            severe: 1.09,
            general: 1.09
        },
        chatuSugar: {
            general: 3.25,
            severe: 3.25
        }
    }
};

function calculateResults(values, isSection1) {
    const rates = isSection1 ? RATES.section1 : RATES.section2;
    const { pregnant, severe, general } = values;

    const totalBeneficiaries = pregnant + severe + general;

    // Calculate egg costs
    const eggCosts = {
        pregnant: pregnant * rates.egg.pregnant,
        severe: severe * rates.egg.severe,
        general: general * rates.egg.general
    };
    eggCosts.total = eggCosts.pregnant + eggCosts.severe + eggCosts.general;

    // Calculate vegetable costs
    const vegetableCosts = {
        pregnant: pregnant * rates.vegetable.pregnant,
        severe: severe * rates.vegetable.severe,
        general: general * rates.vegetable.general
    };
    vegetableCosts.total = vegetableCosts.pregnant + vegetableCosts.severe + vegetableCosts.general;

    // Calculate morning snacks
    const morningSnacks = {
        general: isSection1 ? general * 0 : general * 1,
        severe: isSection1 ? severe * 0 : severe * 1
    };

    // Calculate chatu sugar costs
    const chatuSugarCosts = {
        general: morningSnacks.general * rates.chatuSugar.general,
        severe: morningSnacks.severe * rates.chatuSugar.severe
    };
    chatuSugarCosts.total = chatuSugarCosts.general + chatuSugarCosts.severe;

    // Calculate grand total
    const grandTotal = eggCosts.total + vegetableCosts.total + chatuSugarCosts.total;

    return {
        totalBeneficiaries,
        eggCosts,
        vegetableCosts,
        morningSnacks,
        chatuSugarCosts,
        grandTotal
    };
}
