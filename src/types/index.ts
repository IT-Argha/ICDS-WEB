export interface BeneficiaryValues {
  pregnant: string;
  severe: string;
  general: string;
}

export interface CalculationResults {
  totalBeneficiaries: number;
  eggCosts: number[];
  vegetableCosts: number[];
  morningSnackCount: number[];
  chatuSugarCosts: number[];
  totalCosts: {
    eggVegetableTotal: number;
    chatuSugarTotal: number;
    grandTotal: number;
  };
}