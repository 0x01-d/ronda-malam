let itemName = "anggaran";
let historyName = "history-anggaran";
function saveDatabase(name, item) {
  localStorage[name] = item;
}
function buatHistory(value, status, deskripsi) {
  let historyTersimpan = localStorage[historyName] || "[]";
  historyTersimpan = JSON.parse(historyTersimpan);
  historyTersimpan.push({
    date: new Date().toLocaleString(),
    jumlah: value,
    status,
    deskripsi,
  });
  localStorage[historyName] = JSON.stringify(historyTersimpan);
  // console.log("history tersimpan", localStorage[historyName]);
}
export function simpanJumlahAnggaran(value, status, deskripsi) {
  buatHistory(value, status, deskripsi);
  let lastValue = getValueAnggaran();
  value = status == "pengurangan" ? lastValue - value : lastValue + value;
  saveDatabase(itemName, value);
}
export function getValueAnggaran() {
  let anggaranTersimpan = localStorage[itemName] || 0;
  return Number(anggaranTersimpan);
}
export function getHistoryAnggaran() {
  let historyTersimpan = localStorage[historyName] || "[]";
  historyTersimpan = JSON.parse(historyTersimpan);
  return historyTersimpan;
}
