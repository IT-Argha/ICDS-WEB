import { BeneficiaryValues, CalculationResults } from '../types';

export const calculateResults = (values: BeneficiaryValues, isSection1: boolean): CalculationResults => {
  const pregnant = Number(values.pregnant) || 0;
  const severe = Number(values.severe) || 0;
  const general = Number(values.general) || 0;

  const totalBeneficiaries = pregnant + severe + general;

  // Section 1 calculations
  if (isSection1) {
    const eggCosts = [
      pregnant * 6.50,
      severe * 6.50,
      general * 6.50,
      (pregnant + severe + general) * 6.50
    ];

    const vegetableCosts = [
      pregnant * 0.84,
      severe * 0,
      general * 0,
      pregnant * 0.84
    ];

    const morningSnackCount = [general * 0, severe * 0];
    
    const chatuSugarCosts = [
      general * 0,
      severe * 0
    ];

    const chatuSugarTotal = chatuSugarCosts[0] + chatuSugarCosts[1];
    const eggVegetableTotal = eggCosts[3] + vegetableCosts[3];
    const grandTotal = eggVegetableTotal + chatuSugarTotal;

    return {
      totalBeneficiaries,
      eggCosts,
      vegetableCosts,
      morningSnackCount,
      chatuSugarCosts,
      totalCosts: {
        eggVegetableTotal,
        chatuSugarTotal,
        grandTotal
      }
    };
  }

  // Section 2 calculations
  const eggCosts = [
    pregnant * 6.50,
    severe * 0,
    general * 0,
    pregnant * 6.50
  ];

  const vegetableCosts = [
    pregnant * 1.63,
    severe * 1.09,
    general * 1.09,
    (pregnant * 1.63) + (severe * 1.09) + (general * 1.09)
  ];

  const morningSnackCount = [general * 1, severe * 1];
  
  const chatuSugarCosts = [
    morningSnackCount[0] * 3.25,
    morningSnackCount[1] * 3.25
  ];

  const chatuSugarTotal = chatuSugarCosts[0] + chatuSugarCosts[1];
  const eggVegetableTotal = eggCosts[3] + vegetableCosts[3];
  const grandTotal = eggVegetableTotal + chatuSugarTotal;

  return {
    totalBeneficiaries,
    eggCosts,
    vegetableCosts,
    morningSnackCount,
    chatuSugarCosts,
    totalCosts: {
      eggVegetableTotal,
      chatuSugarTotal,
      grandTotal
    }
  };
};