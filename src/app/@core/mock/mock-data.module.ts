import { PembayaranHarianService } from './jproduction-data/pembayaran-harian.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { SmartTableService } from './smart-table.service';
import { UserActivityService } from './user-activity.service';
import { OrdersChartService } from './orders-chart.service';
import { ProfitChartService } from './profit-chart.service';
import { TrafficListService } from './traffic-list.service';
import { PeriodsService } from './periods.service';
import { EarningService } from './earning.service';
import { OrdersProfitChartService } from './orders-profit-chart.service';
import { TrafficBarService } from './traffic-bar.service';
import { ProfitBarAnimationChartService } from './profit-bar-animation-chart.service';
import { TemperatureHumidityService } from './temperature-humidity.service';
import { SolarService } from './solar.service';
import { TrafficChartService } from './traffic-chart.service';
import { StatsBarService } from './stats-bar.service';
import { CountryOrderService } from './country-order.service';
import { StatsProgressBarService } from './stats-progress-bar.service';
import { VisitorsAnalyticsService } from './visitors-analytics.service';
import { SecurityCamerasService } from './security-cameras.service';

import { GudangService } from './master-data-service/gudang.service';
import { PegawaiService } from './master-data-service/pegawai.service';
import { SupplierService } from './master-data-service/supplier.service';
import { CustomerService } from './master-data-service/customer.service';
import { GolonganService } from './master-data-service/golongan.service';
import { AreaService } from './master-data-service/area.service';
import { SalesService } from './master-data-service/sales.service';
import { SatuanService } from './master-data-service/satuan.service';
import { BarangService } from './master-data-service/barang.service';
import { KategoriPengeluaranService } from './master-data-service/kategori-pengeluaran.service';

import { SaldoKasService } from './transaksi-data/saldo-kas.service';
import { PembelianService } from './transaksi-data/pembelian.service';
import { PenjualanService } from './transaksi-data/penjualan.service';
import { ReturPembelianService } from './transaksi-data/retur-pembelian.service';
import { ReturPenjualanService } from './transaksi-data/retur-penjualan.service';
import { PembayaranFeeService } from './transaksi-data/pembayaran-fee.service';
import { SaldoAwalPiutangService } from './transaksi-data/saldo-awal-piutang.service';
import { BayarHutangSupplierService } from './transaksi-data/bayar-hutang-supplier.service';
import { BayarHutangCustomerService } from './transaksi-data/bayar-hutang-customer.service';
import { MutasiBarangService } from './transaksi-data/mutasi-barang.service';
import { StockOpnameService } from './transaksi-data/stock-opname.service';
import { PengeluaranService } from './transaksi-data/pengeluaran.service';

import { CuttingService } from './jproduction-data/cutting.service';
import { Cutting2Service } from './jproduction-data/cutting2.service';
import { EmborderyService } from './jproduction-data/embordery.service';
import { SewingService } from './jproduction-data/sewing.service';
import { FinishingService } from './jproduction-data/finishing.service';
import { Embordery2Service } from './jproduction-data/embordery2.service';
import { Finishing2Service } from './jproduction-data/finishing2.service';
import { Finishing3Service } from './jproduction-data/finishing3.service';
import { Sewing2Service } from './jproduction-data/sewing2.service';
import { Pembelian2Service } from './transaksi-data/pembelian2.service';
import { Penjualan2Service } from './transaksi-data/penjualan2.service';
import { ReturPembelian2Service } from './transaksi-data/retur-pembelian2.service';
import { ReturPenjualan2Service } from './transaksi-data/retur-penjualan2.service';
import { BayarHutangSupplier2Service } from './transaksi-data/bayar-hutang-supplier2.service';
import { Pengeluaran2Service } from './transaksi-data/pengeluaran2.service';
import { BayarHutangCustomer2Service } from './transaksi-data/bayar-hutang-customer2.service';
import { MutasiBarang2Service } from './transaksi-data/mutasi-barang2.service';
import { StockOpname2Service } from './transaksi-data/stock-opname2.service';
import { PurcaseOrderService } from './jproduction-data/purcase-order.service';
import { PurcaseOrder2Service } from './jproduction-data/purcase-order2.service';


const SERVICES = [
  UserService,
  ElectricityService,
  SmartTableService,
  UserActivityService,
  OrdersChartService,
  ProfitChartService,
  TrafficListService,
  PeriodsService,
  EarningService,
  OrdersProfitChartService,
  TrafficBarService,
  ProfitBarAnimationChartService,
  TemperatureHumidityService,
  SolarService,
  TrafficChartService,
  StatsBarService,
  CountryOrderService,
  StatsProgressBarService,
  VisitorsAnalyticsService,
  SecurityCamerasService,

  GudangService,
  PegawaiService,
  SupplierService,
  CustomerService,
  GolonganService,
  AreaService,
  SalesService,
  SatuanService,
  BarangService,
  KategoriPengeluaranService,

  SaldoKasService,
  PembelianService,
  Pembelian2Service,
  PenjualanService,
  Penjualan2Service,
  ReturPembelianService,
  ReturPembelian2Service,
  ReturPenjualanService,
  ReturPenjualan2Service,
  PembayaranFeeService,
  SaldoAwalPiutangService,
  BayarHutangSupplierService,
  BayarHutangSupplier2Service,
  BayarHutangCustomerService,
  BayarHutangCustomer2Service,
  MutasiBarangService,
  MutasiBarang2Service,
  StockOpnameService,
  StockOpname2Service,
  PengeluaranService,
  Pengeluaran2Service,

  PurcaseOrderService,
  PurcaseOrder2Service,
  CuttingService,
  Cutting2Service,
  EmborderyService,
  Embordery2Service,
  SewingService,
  Sewing2Service,
  FinishingService,
  Finishing2Service,
  Finishing3Service,
  PembayaranHarianService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders<MockDataModule> {
    return {
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
