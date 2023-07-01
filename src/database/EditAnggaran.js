let itemName = "anggaran";
let historyName = "history-anggaran";
function saveDatabase(name, item) {
  localStorage[name] = item;
}
function buatHistory(value, status) {
  let historyTersimpan = localStorage[historyName] || [];
  historyTersimpan = JSON.parse(historyTersimpan);
  historyTersimpan.push({ date: new Date().toLocaleString(), value, status });
  localStorage[historyName] = JSON.stringify(historyTersimpan);
  console.log("history tersimpan");
}
export function simpanJumlahAnggaran(value, status) {
  buatHistory(value, status);
  saveDatabase(itemName, value);
}
export function getValueAnggaran() {
  let anggaranTersimpan = localStorage[itemName] || 100002;
  return Number(anggaranTersimpan);
}
