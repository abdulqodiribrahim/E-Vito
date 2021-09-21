import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalesData } from '../../../../@core/data/master-data-modul/sales';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-penjualan-dialog',
  templateUrl: './penjualan-dialog.component.html',
  styleUrls: ['./penjualan-dialog.component.scss']
})
export class PenjualanDialogComponent implements OnInit {

  //for Option
  optionsJenisNota: string[];
  filteredNgModelOptionsJenisNota$: Observable<string[]>;
  valueJenisNota: string;

  ngOnInit() {
    this.optionsJenisNota = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsJenisNota$ = of(this.optionsJenisNota);

    this.optionsKodeGudang = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeGudang$ = of(this.optionsKodeGudang);

    this.optionsKodeSales = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeSales$ = of(this.optionsKodeSales);

    this.optionsArea = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsArea$ = of(this.optionsArea);

    this.optionsKodeCustomer = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeCustomer$ = of(this.optionsKodeCustomer);
  }
  private filterJenisNota(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsJenisNota.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeJenisNota(value: string) {
    this.filteredNgModelOptionsJenisNota$ = of(this.filterJenisNota(value));
  }

  //for Option
  optionsKodeGudang: string[];
  filteredNgModelOptionsKodeGudang$: Observable<string[]>;
  valueKodeGudang: string;

  private filterKodeGudang(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeGudang.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeGudang(value: string) {
    this.filteredNgModelOptionsKodeGudang$ = of(this.filterKodeGudang(value));
  }

  //for Option
  optionsKodeSales: string[];
  filteredNgModelOptionsKodeSales$: Observable<string[]>;
  valueKodeSales: string;

  private filterKodeSales(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeSales.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeSales(value: string) {
    this.filteredNgModelOptionsKodeSales$ = of(this.filterKodeSales(value));
  }

  //for Option
  optionsArea: string[];
  filteredNgModelOptionsArea$: Observable<string[]>;
  valueArea: string;

  private filterArea(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsArea.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeArea(value: string) {
    this.filteredNgModelOptionsArea$ = of(this.filterArea(value));
  }

  //for Option
  optionsKodeCustomer: string[];
  filteredNgModelOptionsKodeCustomer$: Observable<string[]>;
  valueKodeCustomer: string;

  private filterKodeCustomer(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeCustomer.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeCustomer(value: string) {
    this.filteredNgModelOptionsKodeCustomer$ = of(this.filterKodeCustomer(value));
  }

  imageUrl: string | ArrayBuffer = "https://bulma.io/images/placeholders/480x480.png";

  constructor(protected ref: NbDialogRef<PenjualanDialogComponent>, private service: SalesData, private dataTable: DataTableService, private datePipe: DatePipe) {
    const data = this.service.getData();
    this.source.load(data);
  }

  //for table
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
      mode: 'inline',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
      mode: 'inline',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      kode_brg: {
        title: 'Kode_Barang',
        type: 'string',
      },
      nama_brg: {
        title: 'Nama_Barang',
        type: 'string',
      },
      qty: {
        title: 'Qty',
        type: 'string',
      },
      satuan: {
        title: 'Satuan',
        type: 'string',
      },
      hj_1: {
        title: 'Harga',
        type: 'string',
      },
      disc: {
        title: 'Disc(%)',
        type: 'string',
      },
      Jml_Disc: {
        title: 'Jml_Disc(RP)',
        type: 'string',
      },
      netto: {
        title: 'Netto',
        type: 'string',
      },
      total_harga: {
        title: 'Total Harga',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  onCreateConfirm(event, noTransaksi, tanggalTransaksi, kodeGudang): void {
    // this.dataTable.createData("tm_sales", event.newData);
    this.add_tt_detail_jual(event, noTransaksi);
    this.add_tt_stock(event, noTransaksi, tanggalTransaksi, kodeGudang);

  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tm_sales", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tm_sales", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  cancel() {
    this.ref.close();
  }

  myDate = new Date();
  submit(noTransaksi, tanggalTransaksi, noDokument, jenisNota, jatuhTempo, tanggalJatuhTempo,
    kodeGudang, namaGudang, kodeSales, namaSales, area, kodeCustomer, status, namaCustomer, alamatCustomer,
    subTotalRp, discountPercent, jumlahDiscRp, biayaLainRp,
    cashRp, transferRp, cekRp,
    hargaBersih, totalBayar, kembali, hutang,
    noCek, namaBank, atasNama, tanggalCek, tanggalCair) {

    let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.dataTable.createData("tt_bukti_jual", {
      no_trans: noTransaksi.value,
      tgl_trans: tanggalTransaksi.value,
      no_dok: noDokument.value,
      jenis_nota: jenisNota.value,
      jt: jatuhTempo.value,
      tgl_jt: tanggalJatuhTempo.value,

      kode_gud: kodeGudang.value,
      // no_trans: noTransaksiPembelian.value,
      kode_sales: kodeSales.value,
      nama_sales: namaSales.value,
      area: area.value,
      kode_cust: kodeCustomer.value,
      tipe: status.value,
      nama_cust: namaCustomer.value,
      alamat_cust: alamatCustomer.value,

      subtotal: subTotalRp.value,
      disc: discountPercent.value,
      jml_disc: jumlahDiscRp.value,
      biaya: biayaLainRp.value,

      cash: cashRp.value,
      transfer: transferRp.value,
      cek: cekRp.value,

      harga_bersih: hargaBersih.value,
      total_bayar: totalBayar.value,
      kembali: kembali.value,
      hutang: hutang.value,

      no_cek: noCek.value,
      nama_bank: namaBank.value,
      atas_nama: atasNama.value,
      tgl_cek: tanggalCek.value,
      tgl_cair: tanggalCair.value,

      komp: "administrator",
      user_entry: "administrator",
      tgl_entry: latest_date,
    });
  }

  add_tt_detail_jual(event, noTransaksi) {
    this.dataTable.createData("tt_bukti_jual", {
      no_trans: noTransaksi.value,
      kode_brg: event.newData.kode_brg,
      nama_brg: event.newData.nama_brg,
      qty: event.newData.qty,
      satuan: event.newData.satuan,
      harga: event.newData.hj_1,
      disc: event.newData.disc,
      jml_disc: event.newData.Jml_Disc,
      total_harga: event.newData.total_harga,
    });
  }

  add_tt_stock(event, noTransaksi, tanggalTransaksi, kodeGudang) {
    this.dataTable.createData("tt_stock", {
      asal: "jual",
      tgl_trans: tanggalTransaksi.value,
      no_trans: noTransaksi.value,
      kode_gud: kodeGudang.value,
      kode_brg: event.newData.kode_brg,
      qty_in: event.newData.qty,
      qty_out: "0",
    });
  }

}
