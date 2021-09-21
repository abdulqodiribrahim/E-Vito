import { FinishingComponent } from './finishing/finishing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';

import { GudangComponent } from "./gudang/gudang.component";
import { PegawaiComponent } from "./pegawai/pegawai.component";
import { SupplierComponent } from "./supplier/supplier.component";
import { CustomerComponent } from "./customer/customer.component";
import { GolonganComponent } from "./golongan/golongan.component";
import { AreaComponent } from "./area/area.component";
import { SalesComponent } from "./sales/sales.component";
import { SatuanComponent } from "./satuan/satuan.component";
import { BarangComponent } from "./barang/barang.component";
import { KategoriPengeluaranComponent } from "./kategori-pengeluaran/kategori-pengeluaran.component";

import { SaldoKasComponent } from "./saldo-kas/saldo-kas.component";
import { PembelianComponent } from "./pembelian/pembelian.component";
import { PenjualanComponent } from "./penjualan/penjualan.component";
import { ReturPembelianComponent } from "./retur-pembelian/retur-pembelian.component";
import { ReturPenjualanComponent } from "./retur-penjualan/retur-penjualan.component";
import { PembayaranFeeComponent } from "./pembayaran-fee/pembayaran-fee.component";
import { SaldoAwalPiutangComponent } from './saldo-awal-piutang/saldo-awal-piutang.component';
import { BayarHutangSupplierComponent } from './bayar-hutang-supplier/bayar-hutang-supplier.component';
import { BayarHutangCustomerComponent } from './bayar-hutang-customer/bayar-hutang-customer.component';
import { MutasiBarangComponent } from './mutasi-barang/mutasi-barang.component';
import { StockOpnameComponent } from './stock-opname/stock-opname.component';
import { PengeluaranComponent } from './pengeluaran/pengeluaran.component';

import { CuttingComponent } from './cutting/cutting.component';
import { EmborderyComponent } from './embordery/embordery.component';
import { SewingComponent } from './sewing/sewing.component';
import { PembayaranHarianComponent } from './pembayaran-harian/pembayaran-harian.component';
import { PurcaseOrderComponent } from './purcase-order/purcase-order.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'gudang',
      component: GudangComponent,
    },
    {
      path: 'pegawai',
      component: PegawaiComponent,
    },
    {
      path: 'supplier',
      component: SupplierComponent,
    },
    {
      path: 'customer',
      component: CustomerComponent,
    },
    {
      path: 'golongan',
      component: GolonganComponent,
    },
    {
      path: 'area',
      component: AreaComponent,
    },
    {
      path: 'sales',
      component: SalesComponent,
    },
    {
      path: 'satuan',
      component: SatuanComponent,
    },
    {
      path: 'barang',
      component: BarangComponent,
    },
    {
      path: 'kategori-pengeluaran',
      component: KategoriPengeluaranComponent,
    },

    {
      path: 'saldo-kas',
      component: SaldoKasComponent,
    },
    {
      path: 'pembelian',
      component: PembelianComponent,
    },
    {
      path: 'penjualan',
      component: PenjualanComponent,
    },
    {
      path: 'retur-pembelian',
      component: ReturPembelianComponent,
    },
    {
      path: 'retur-penjualan',
      component: ReturPenjualanComponent,
    },
    {
      path: 'pembayaran-fee',
      component: PembayaranFeeComponent,
    },
    {
      path: 'saldo-awal-piutang',
      component: SaldoAwalPiutangComponent,
    },
    {
      path: 'bayar-hutang-supplier',
      component: BayarHutangSupplierComponent,
    },
    {
      path: 'bayar-hutang-customer',
      component: BayarHutangCustomerComponent,
    },
    {
      path: 'mutasi-barang',
      component: MutasiBarangComponent,
    },
    {
      path: 'stock-opname',
      component: StockOpnameComponent,
    },
    {
      path: 'pengeluaran',
      component: PengeluaranComponent,
    },

    {
      path: 'purcase-order',
      component: PurcaseOrderComponent,
    },
    {
      path: 'cutting',
      component: CuttingComponent,
    },
    {
      path: 'embordery',
      component: EmborderyComponent,
    },
    {
      path: 'sewing',
      component: SewingComponent,
    },
    {
      path: 'finishing',
      component: FinishingComponent,
    },
    {
      path: 'pembayaran-harian',
      component: PembayaranHarianComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  TreeGridComponent,

  GudangComponent,
  PegawaiComponent,
  SupplierComponent,
  CustomerComponent,
  GolonganComponent,
  AreaComponent,
  SalesComponent,
  SatuanComponent,
  BarangComponent,
  KategoriPengeluaranComponent,

  SaldoKasComponent,
  PembelianComponent,
  PenjualanComponent,
  ReturPembelianComponent,
  ReturPenjualanComponent,
  PembayaranFeeComponent,
  SaldoAwalPiutangComponent,
  BayarHutangSupplierComponent,
  StockOpnameComponent,
  PengeluaranComponent,

  CuttingComponent,
  EmborderyComponent,
  SewingComponent,
  FinishingComponent,
  PembayaranHarianComponent,
];
