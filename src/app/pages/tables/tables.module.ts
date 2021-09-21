import { NgModule } from '@angular/core';
import { NbActionsModule, NbAutocompleteModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbPopoverModule, NbRadioModule, NbSelectModule, NbTabsetModule, NbTooltipModule, NbTreeGridModule, NbUserModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { GudangComponent } from './gudang/gudang.component';
import { PegawaiComponent } from './pegawai/pegawai.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CustomerComponent } from './customer/customer.component';
import { GolonganComponent } from './golongan/golongan.component';
import { AreaComponent } from './area/area.component';
import { SalesComponent } from './sales/sales.component';
import { SatuanComponent } from './satuan/satuan.component';
import { BarangComponent } from './barang/barang.component';
import { KategoriPengeluaranComponent } from './kategori-pengeluaran/kategori-pengeluaran.component';
import { PembelianComponent } from './pembelian/pembelian.component';
import { SaldoKasComponent } from './saldo-kas/saldo-kas.component';
import { PenjualanComponent } from './penjualan/penjualan.component';
import { ReturPembelianComponent } from './retur-pembelian/retur-pembelian.component';
import { ReturPenjualanComponent } from './retur-penjualan/retur-penjualan.component';
import { PembayaranFeeComponent } from './pembayaran-fee/pembayaran-fee.component';
import { SaldoAwalPiutangComponent } from './saldo-awal-piutang/saldo-awal-piutang.component';
import { BayarHutangSupplierComponent } from './bayar-hutang-supplier/bayar-hutang-supplier.component';
import { BayarHutangCustomerComponent } from './bayar-hutang-customer/bayar-hutang-customer.component';
import { MutasiBarangComponent } from './mutasi-barang/mutasi-barang.component';
import { StockOpnameComponent } from './stock-opname/stock-opname.component';
import { PengeluaranComponent } from './pengeluaran/pengeluaran.component';
import { CuttingComponent } from './cutting/cutting.component';
import { EmborderyComponent } from './embordery/embordery.component';
import { SewingComponent } from './sewing/sewing.component';
import { FinishingComponent } from './finishing/finishing.component';
import { PembayaranHarianComponent } from './pembayaran-harian/pembayaran-harian.component';
import { AreaDialogComponent } from './area/area-dialog/area-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalOverlaysRoutingModule } from '../modal-overlays/modal-overlays-routing.module';
import { GudangDialogComponent } from './gudang/gudang-dialog/gudang-dialog.component';
import { PegawaiDialogComponent } from './pegawai/pegawai-dialog/pegawai-dialog.component';
import { SupplierDialogComponent } from './supplier/supplier-dialog/supplier-dialog.component';
import { CustomerDialogComponent } from './customer/customer-dialog/customer-dialog.component';
import { GolonganDialogComponent } from './golongan/golongan-dialog/golongan-dialog.component';
import { SatuanDialogComponent } from './satuan/satuan-dialog/satuan-dialog.component';
import { SalesDialogComponent } from './sales/sales-dialog/sales-dialog.component';
import { KategoriPengeluranDialogComponent } from './kategori-pengeluaran/kategori-pengeluran-dialog/kategori-pengeluran-dialog.component';
import { SaldoKasDialogComponent } from './saldo-kas/saldo-kas-dialog/saldo-kas-dialog.component';
import { PembelianDialogComponent } from './pembelian/pembelian-dialog/pembelian-dialog.component';
import { PenjualanDialogComponent } from './penjualan/penjualan-dialog/penjualan-dialog.component';
import { ReturPembelianDialogComponent } from './retur-pembelian/retur-pembelian-dialog/retur-pembelian-dialog.component';
import { ReturPenjualanDialogComponent } from './retur-penjualan/retur-penjualan-dialog/retur-penjualan-dialog.component';
import { PembayaranFeeDialogComponent } from './pembayaran-fee/pembayaran-fee-dialog/pembayaran-fee-dialog.component';
import { SaldoAwalPiutangDialogComponent } from './saldo-awal-piutang/saldo-awal-piutang-dialog/saldo-awal-piutang-dialog.component';
import { BayarHutangSupplierDialogComponent } from './bayar-hutang-supplier/bayar-hutang-supplier-dialog/bayar-hutang-supplier-dialog.component';
import { BayarHutangCustomerDialogComponent } from './bayar-hutang-customer/bayar-hutang-customer-dialog/bayar-hutang-customer-dialog.component';
import { MutasiBarangDialogComponent } from './mutasi-barang/mutasi-barang-dialog/mutasi-barang-dialog.component';
import { StockOpnameDialogComponent } from './stock-opname/stock-opname-dialog/stock-opname-dialog.component';
import { PengeluaranDialogComponent } from './pengeluaran/pengeluaran-dialog/pengeluaran-dialog.component';
import { CuttingDialogComponent } from './cutting/cutting-dialog/cutting-dialog.component';
import { EmborderyDialogComponent } from './embordery/embordery-dialog/embordery-dialog.component';
import { SewingDialogComponent } from './sewing/sewing-dialog/sewing-dialog.component';
import { FinishingDialogComponent } from './finishing/finishing-dialog/finishing-dialog.component';
import { PembayaranHarianDialogComponent } from './pembayaran-harian/pembayaran-harian-dialog/pembayaran-harian-dialog.component';
import { BarangDialogComponent } from './barang/barang-dialog/barang-dialog.component';
import { PurcaseOrderComponent } from './purcase-order/purcase-order.component';
import { PurcaseOrderDialogComponent } from './purcase-order/purcase-order-dialog/purcase-order-dialog.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    ModalOverlaysRoutingModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbCardModule,
    NbAutocompleteModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbTabsetModule,
    NbPopoverModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbTooltipModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
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
    PembelianComponent,
    SaldoKasComponent,
    PenjualanComponent,
    ReturPembelianComponent,
    ReturPenjualanComponent,
    PembayaranFeeComponent,
    SaldoAwalPiutangComponent,
    BayarHutangSupplierComponent,
    BayarHutangCustomerComponent,
    MutasiBarangComponent,
    StockOpnameComponent,
    PengeluaranComponent,
    CuttingComponent,
    EmborderyComponent,
    SewingComponent,
    FinishingComponent,
    PembayaranHarianComponent,
    AreaDialogComponent,
    GudangDialogComponent,
    PegawaiDialogComponent,
    SupplierDialogComponent,
    CustomerDialogComponent,
    GolonganDialogComponent,
    SatuanDialogComponent,
    SalesDialogComponent,
    KategoriPengeluranDialogComponent,
    SaldoKasDialogComponent,
    PembelianDialogComponent,
    PenjualanDialogComponent,
    ReturPembelianDialogComponent,
    ReturPenjualanDialogComponent,
    PembayaranFeeDialogComponent,
    SaldoAwalPiutangDialogComponent,
    BayarHutangSupplierDialogComponent,
    BayarHutangCustomerDialogComponent,
    MutasiBarangDialogComponent,
    StockOpnameDialogComponent,
    PengeluaranDialogComponent,
    CuttingDialogComponent,
    EmborderyDialogComponent,
    SewingDialogComponent,
    FinishingDialogComponent,
    PembayaranHarianDialogComponent,
    BarangDialogComponent,
    PurcaseOrderComponent,
    PurcaseOrderDialogComponent,
  ],
})
export class TablesModule { }
