
export abstract class SmartTableData {
  abstract getData(): any[];
}

export class SmartTableModel {
  id: string;
  harga: number;
  jumlah_harga: number;
  kode_brg: string;
  kode_prod: string;
  nama_brg: string;
  qty: number;
  satuan: string;
}
