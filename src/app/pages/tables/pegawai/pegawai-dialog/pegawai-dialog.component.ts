import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-pegawai-dialog',
  templateUrl: './pegawai-dialog.component.html',
  styleUrls: ['./pegawai-dialog.component.scss']
})
export class PegawaiDialogComponent implements OnInit {

  myDate = new Date();
  constructor(protected ref: NbDialogRef<PegawaiDialogComponent>, private dataTable: DataTableService, private datePipe: DatePipe) { }

  //for Option
  optionsJenisPenggajian: string[];
  filteredNgModelOptionsJenisPenggajian$: Observable<string[]>;
  valueJenisPenggajian: string;

  ngOnInit() {
    this.optionsJenisPenggajian = ['Cash', 'Transfer'];
    this.filteredNgModelOptionsJenisPenggajian$ = of(this.optionsJenisPenggajian);
  }
  private filterJenisPenggajian(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsJenisPenggajian.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeJenisPenggajian(value: string) {
    this.filteredNgModelOptionsJenisPenggajian$ = of(this.filterJenisPenggajian(value));
  }

  cancel() {
    this.ref.close();
  }

  submit(kode, nama, kontak_person, alamat, kota, kode_pos, email, telp, fax, jabatan, jenis) {
    let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.dataTable.createData("tm_pegawai", {
      kode: kode,
      nama: nama,
      kontak_person: kontak_person,
      alamat: alamat,
      kota: kota,
      kode_pos: kode_pos,
      email: email,
      telp: telp,
      fax: fax,
      jabatan: jabatan,
      jenis: jenis,
      komp: "administrator",
      user_entry: "administrator",
      tgl_entry: latest_date,
    });
  }

}
