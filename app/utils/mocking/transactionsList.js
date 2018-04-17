export default function generateMockTransactionList(size = 20) {
  const referenceDate = new Date();
  const referenceTime = referenceDate.getTime();
  const referenceObject = {
    time: referenceTime,
    id: '0',
    fromAddress: '123',
    toAddress: '321',
    amount: 100,
    fee: 20,
  };

  const mockDataList = Array(size).fill(referenceObject)
    .map((referenceInstance, index) => {
      const newObject = {
        ...referenceInstance,
        ...{ id: String(index) },
        ...{ time: new Date(referenceObject.time + (4 ** (index + 1))).toTimeString() },
        ...{ fromAddress: (parseFloat(referenceInstance.fromAddress) * (index + 1) * 20.0).toString() },
        ...{ toAddress: (parseFloat(referenceInstance.toAddress) * (index + 1) * 20.0).toString() },
        ...{ amount: (referenceInstance.amount + (index * 20.0)) },
        ...{ fee: (referenceInstance.fee * (index > 0 ? (1.0 / index) : 0.35 * (index / 2))) }
      };
      return newObject;
    });
  return mockDataList;
}
