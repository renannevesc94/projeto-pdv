import { useEffect, useState } from "react";

export const usePaymentCalculator = () => {
  const [formData, setFormData] = useState({
    quantity: "1",
    discountType: "R$",
    unitValue: 2,
    discountValue: "",
    totalValue: 2,
  });

  const calculateTotalPrice = () => {
    console.log("Carregou");
    const discount = Math.max(0, Number(formData.discountValue));
    const unitValue = Number(formData.unitValue);
    const quantity = Number(formData.quantity);
    let totalValue = quantity * unitValue;

    if (formData.discountType === "%") {
      totalValue -= (totalValue * discount) / 100;
    } else {
      totalValue = totalValue - discount;
    }
    totalValue = Math.max(0, totalValue);
    setFormData({ ...formData, totalValue: totalValue });
  };

  const handleDiscountChange = (value: string) => {
    if (Number(value) >= 0 || value === "") {
      return setFormData({ ...formData, discountValue: value });
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [formData.quantity, formData.discountType, formData.unitValue, formData.discountValue]);

  return {
    formData,
    setFormData,
    handleDiscountChange,
  };
};
