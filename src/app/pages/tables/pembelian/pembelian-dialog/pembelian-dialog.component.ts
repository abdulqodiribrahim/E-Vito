import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalesData } from '../../../../@core/data/master-data-modul/sales';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-pembelian-dialog',
  templateUrl: './pembelian-dialog.component.html',
  styleUrls: ['./pembelian-dialog.component.scss']
})
export class PembelianDialogComponent implements OnInit {

  //for Option
  optionsJenisPembelian: string[];
  filteredNgModelOptionsJenisPembelian$: Observable<string[]>;
  valueJenisPembelian: string;

  ngOnInit() {
    this.optionsJenisPembelian = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsJenisPembelian$ = of(this.optionsJenisPembelian);

    this.optionsJenisNota = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsJenisNota$ = of(this.optionsJenisNota);

    this.optionsKodeGudang = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeGudang$ = of(this.optionsKodeGudang);

    this.optionsKodeSupplier = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeSupplier$ = of(this.optionsKodeSupplier);
  }
  private filterJenisPembelian(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsJenisPembelian.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeJenisPembelian(value: string) {
    this.filteredNgModelOptionsJenisPembelian$ = of(this.filterJenisPembelian(value));
  }

  //for Option
  optionsJenisNota: string[];
  filteredNgModelOptionsJenisNota$: Observable<string[]>;
  valueJenisNota: string;

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
  optionsKodeSupplier: string[];
  filteredNgModelOptionsKodeSupplier$: Observable<string[]>;
  valueKodeSupplier: string;

  private filterKodeSupplier(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeSupplier.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeSupplier(value: string) {
    this.filteredNgModelOptionsKodeSupplier$ = of(this.filterKodeSupplier(value));
  }

  constructor(protected ref: NbDialogRef<PembelianDialogComponent>, private service: SalesData, private dataTable: DataTableService, private datePipe: DatePipe) {
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
      harga: {
        title: 'Harga',
        type: 'string',
      },
      disc: {
        title: 'Disc(%)',
        type: 'string',
      },
      jml_disc: {
        title: 'Jml_Disc(RP)',
        type: 'string',
      },
      total_harga: {
        title: 'Total_Harga',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  onCreateConfirm(event, no_trans, tgl_trans, kode_gud): void {
    this.add_tt_detail_beli(event, no_trans);
    this.add_tt_stock(event, tgl_trans, no_trans, kode_gud);
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tt_detail_beli", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_detail_beli", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  cancel() {
    this.ref.close();
  }

  myDate = new Date();
  submit(name) {
    this.ref.close();

    // addBuktiBeli(kdGud, kdSup);
  }

  add_tt_detail_beli(event, no_trans) {
    this.dataTable.createData("tt_detail_beli", {
      no_trans: no_trans.value,
      kode_brg: event.newData.kode_brg,
      nama_brg: event.newData.nama_brg,
      qty: event.newData.qty,
      satuan: event.newData.satuan,
      harga: event.newData.harga,
      disc: event.newData.disc,
      jml_disc: event.newData.jml_disc,
      total_harga: event.newData.total_harga,
    });
  }

  add_tt_stock(event, tgl_trans, no_trans, kode_gud) {
    this.dataTable.createData("tt_stock", {
      asal: "beli",
      tgl_trans: tgl_trans.value,
      no_trans: no_trans.value,
      kode_gud: kode_gud.value,
      kode_brg: event.newData.kode_brg,
      qty_in: event.newData.qty_in,
      qty_out: "0",
    });
  }


  add_tt_bukti_beli(noTransaksi, tanggalTransaksi, jenisPembelian, noInvSupplier, jenisNota, kodeGudang, namaGudang, jatuhTempoHari, tanggalJatuhTempo, kodeSupplier, namaSupplier, alamatSupplier, subTotalRp, discountPercent, jumlahDiscRp, biayaLainRp, cashRp, transferRp, cekRp, hargaBersih, totalBayar, kembali, hutang, noCek, namaBank, atasNama, tanggalCek, tanggalCair) {

    let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.dataTable.createData("tt_bukti_beli", {
      no_trans: noTransaksi.value,
      tgl_trans: tanggalTransaksi.value,
      kode_gud: kodeGudang.value,
      jenis_beli: jenisPembelian.value,
      no_inv: noInvSupplier.value,
      jenis_nota: jenisNota.value,

      jt: jatuhTempoHari.value,
      tgl_jt: tanggalJatuhTempo.value,
      kode_sup: kodeSupplier.value,
      nama_sup: namaSupplier.value,
      alamat_sup: alamatSupplier.value,

      subtotal: subTotalRp.value,
      disc: discountPercent.value,
      jml_disc: jumlahDiscRp.value,
      biaya: biayaLainRp.value,

      cash: cashRp.value,
      transfer: transferRp.value,
      cek: cekRp.value,

      bayar: totalBayar.value,
      kembali: kembali.value,
      hutang: hutang.value,
      total: hargaBersih.value,

      no_cek: noCek.value,
      nama_bank: namaBank.value,
      atas_nama: atasNama.value,

      tgl_cek: tanggalCek.value,
      tgl_cair: tanggalCair.value,

      komp: "administrator",
      tgl_entry: latest_date,
      user_entry: "administrator",
      fTarik: false,
    });
  }
}

