import React, { useState } from "react";
import "./BankAccount.css"; // Подключаем CSS

const BankAccount: React.FC = () => {
  const [balance, setBalance] = useState<number>(0); // Начальный баланс 0€
  const [amount, setAmount] = useState<string>(""); // Поле ввода суммы

  // Функция пополнения баланса
  const handleDeposit = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      setBalance((prev) => prev + value);
      setAmount(""); // Очищаем поле ввода
    }
  };

  // Функция снятия денег
  const handleWithdraw = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0 && value <= balance) {
      setBalance((prev) => prev - value);
      setAmount(""); // Очищаем поле ввода
    }
  };

  return (
    <div className="konto">
      <h1 id="title">Mein Girokonto</h1>
      <div className="saldo">€ {balance.toFixed(2)}</div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="geldbetrag"
        placeholder="Betrag eingeben"
      />
      <div>
        <button className="einzahlen" onClick={handleDeposit}>
          Einzahlen
        </button>
        <button className="auszahlen" onClick={handleWithdraw}>
          Auszahlen
        </button>
      </div>
    </div>
  );
};

export default BankAccount;
