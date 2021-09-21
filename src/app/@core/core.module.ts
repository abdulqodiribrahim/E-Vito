import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
} from './utils';
import { UserData } from './data/users';
import { ElectricityData } from './data/electricity';
import { SmartTableData } from './data/smart-table';
import { UserActivityData } from './data/user-activity';
import { OrdersChartData } from './data/orders-chart';
import { ProfitChartData } from './data/profit-chart';
import { TrafficListData } from './data/traffic-list';
import { EarningData } from './data/earning';
import { OrdersProfitChartData } from './data/orders-profit-chart';
import { TrafficBarData } from './data/traffic-bar';
import { ProfitBarAnimationChartData } from './data/profit-bar-animation-chart';
import { TemperatureHumidityData } from './data/temperature-humidity';
import { SolarData } from './data/solar';
import { TrafficChartData } from './data/traffic-chart';
import { StatsBarData } from './data/stats-bar';
import { CountryOrderData } from './data/country-order';
import { StatsProgressBarData } from './data/stats-progress-bar';
import { VisitorsAnalyticsData } from './data/visitors-analytics';
import { SecurityCamerasData } from './data/security-cameras';

import { GudangData } from './data/master-data-modul/gudang';
import { PegawaiData } from './data/master-data-modul/pegawai';
import { SupplierData } from './data/master-data-modul/supplier';
import { CustomerData } from './data/master-data-modul/customer';
import { GolonganData } from './data/master-data-modul/golongan';
import { AreaData } from './data/master-data-modul/area';
import { SalesData } from './data/master-data-modul/sales';
import { SatuanData } from './data/master-data-modul/satuan';
import { BarangData } from './data/master-data-modul/barang';
import { KategoriPengeluaranData } from './data/master-data-modul/kategori-pengeluaran';

import { SaldoKasData } from './data/transaksi-data-modul/saldo-kas';
import { PembelianData } from './data/transaksi-data-modul/pembelian';
import { PenjualanData } from './data/transaksi-data-modul/penjualan';
import { ReturPembelianData } from './data/transaksi-data-modul/retur-pembelian';
import { ReturPenjualanData } from './data/transaksi-data-modul/retur-penjualan';
import { PembayaranFeeData } from './data/transaksi-data-modul/pembayaran-fee';
import { SaldoAwalPiutangData } from './data/transaksi-data-modul/saldo-awal-piutang';
import { BayarHutangSupplierData } from './data/transaksi-data-modul/bayar-hutang-supplier';
import { BayarHutangCustomerData } from './data/transaksi-data-modul/bayar-hutang-customer';
import { MutasiBarangData } from './data/transaksi-data-modul/mutasi-barang';
import { StockOpnameData } from './data/transaksi-data-modul/stock-opname';
import { PengeluaranData } from './data/transaksi-data-modul/pengeluaran';

import { CuttingData } from './data/jproduction-modul/cutting';
import { CuttingData2 } from './data/jproduction-modul/cutting2';
import { EmborderyData } from './data/jproduction-modul/embordery';
import { SewingData } from './data/jproduction-modul/sewing';
import { FinishingData } from './data/jproduction-modul/finishing';
import { PembayaranHarianData } from './data/jproduction-modul/pembayaran-harian';


import { UserService } from './mock/users.service';
import { ElectricityService } from './mock/electricity.service';
import { SmartTableService } from './mock/smart-table.service';
import { UserActivityService } from './mock/user-activity.service';
import { OrdersChartService } from './mock/orders-chart.service';
import { ProfitChartService } from './mock/profit-chart.service';
import { TrafficListService } from './mock/traffic-list.service';
import { EarningService } from './mock/earning.service';
import { OrdersProfitChartService } from './mock/orders-profit-chart.service';
import { TrafficBarService } from './mock/traffic-bar.service';
import { ProfitBarAnimationChartService } from './mock/profit-bar-animation-chart.service';
import { TemperatureHumidityService } from './mock/temperature-humidity.service';
import { SolarService } from './mock/solar.service';
import { TrafficChartService } from './mock/traffic-chart.service';
import { StatsBarService } from './mock/stats-bar.service';
import { CountryOrderService } from './mock/country-order.service';
import { StatsProgressBarService } from './mock/stats-progress-bar.service';
import { VisitorsAnalyticsService } from './mock/visitors-analytics.service';
import { SecurityCamerasService } from './mock/security-cameras.service';
import { MockDataModule } from './mock/mock-data.module';

import { GudangService } from './mock/master-data-service/gudang.service';
import { PegawaiService } from './mock/master-data-service/pegawai.service';
import { SupplierService } from './mock/master-data-service/supplier.service';
import { CustomerService } from './mock/master-data-service/customer.service';
import { GolonganService } from './mock/master-data-service/golongan.service';
import { AreaService } from './mock/master-data-service/area.service';
import { SalesService } from './mock/master-data-service/sales.service';
import { SatuanService } from './mock/master-data-service/satuan.service';
import { BarangService } from './mock/master-data-service/barang.service';
import { KategoriPengeluaranService } from './mock/master-data-service/kategori-pengeluaran.service';

import { SaldoKasService } from './mock/transaksi-data/saldo-kas.service';
import { PembelianService } from './mock/transaksi-data/pembelian.service';
import { PenjualanService } from './mock/transaksi-data/penjualan.service';
import { ReturPembelianService } from './mock/transaksi-data/retur-pembelian.service';
import { ReturPenjualanService } from './mock/transaksi-data/retur-penjualan.service';
import { PembayaranFeeService } from './mock/transaksi-data/pembayaran-fee.service';
import { SaldoAwalPiutangService } from './mock/transaksi-data/saldo-awal-piutang.service';
import { BayarHutangSupplierService } from './mock/transaksi-data/bayar-hutang-supplier.service';
import { BayarHutangCustomerService } from './mock/transaksi-data/bayar-hutang-customer.service';
import { MutasiBarangService } from './mock/transaksi-data/mutasi-barang.service';
import { StockOpnameService } from './mock/transaksi-data/stock-opname.service';
import { PengeluaranService } from './mock/transaksi-data/pengeluaran.service';

import { CuttingService } from './mock/jproduction-data/cutting.service';
import { Cutting2Service } from './mock/jproduction-data/cutting2.service';
import { EmborderyService } from './mock/jproduction-data/embordery.service';
import { SewingService } from './mock/jproduction-data/sewing.service';
import { FinishingService } from './mock/jproduction-data/finishing.service';
import { PembayaranHarianService } from './mock/jproduction-data/pembayaran-harian.service';
import { Embordery2Service } from './mock/jproduction-data/embordery2.service';
import { EmborderyData2 } from './data/jproduction-modul/embordery2';
import { FinishingData2 } from './data/jproduction-modul/finishing2';
import { Finishing2Service } from './mock/jproduction-data/finishing2.service';
import { FinishingData3 } from './data/jproduction-modul/finishing3';
import { Finishing3Service } from './mock/jproduction-data/finishing3.service';
import { SewingData2 } from './data/jproduction-modul/sewing2';
import { Sewing2Service } from './mock/jproduction-data/sewing2.service';
import { PembelianData2 } from './data/transaksi-data-modul/pembelian2';
import { Pembelian2Service } from './mock/transaksi-data/pembelian2.service';
import { Penjualan2Service } from './mock/transaksi-data/penjualan2.service';
import { PenjualanData2 } from './data/transaksi-data-modul/penjualan2';
import { ReturPembelian2Service } from './mock/transaksi-data/retur-pembelian2.service';
import { ReturPembelianData2 } from './data/transaksi-data-modul/retur-pembelian2';
import { ReturPenjualanData2 } from './data/transaksi-data-modul/retur-penjualan2';
import { ReturPenjualan2Service } from './mock/transaksi-data/retur-penjualan2.service';
import { BayarHutangSupplier2Service } from './mock/transaksi-data/bayar-hutang-supplier2.service';
import { BayarHutangSupplierData2 } from './data/transaksi-data-modul/bayar-hutang-supplier2';
import { Pengeluaran2Service } from './mock/transaksi-data/pengeluaran2.service';
import { PengeluaranData2 } from './data/transaksi-data-modul/pengeluaran2';
import { BayarHutangCustomer2Service } from './mock/transaksi-data/bayar-hutang-customer2.service';
import { BayarHutangCustomerData2 } from './data/transaksi-data-modul/bayar-hutang-customer2';
import { MutasiBarangData2 } from './data/transaksi-data-modul/mutasi-barang2';
import { MutasiBarang2Service } from './mock/transaksi-data/mutasi-barang2.service';
import { StockOpnameData2 } from './data/transaksi-data-modul/stock-opname2';
import { StockOpname2Service } from './mock/transaksi-data/stock-opname2.service';
import { PurcaseOrderData } from './data/jproduction-modul/purcase-order';
import { PurcaseOrderService } from './mock/jproduction-data/purcase-order.service';
import { PurcaseOrderData2 } from './data/jproduction-modul/purcase-order2';
import { PurcaseOrder2Service } from './mock/jproduction-data/purcase-order2.service';


const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];

const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  { provide: ElectricityData, useClass: ElectricityService },
  { provide: SmartTableData, useClass: SmartTableService },
  { provide: UserActivityData, useClass: UserActivityService },
  { provide: OrdersChartData, useClass: OrdersChartService },
  { provide: ProfitChartData, useClass: ProfitChartService },
  { provide: TrafficListData, useClass: TrafficListService },
  { provide: EarningData, useClass: EarningService },
  { provide: OrdersProfitChartData, useClass: OrdersProfitChartService },
  { provide: TrafficBarData, useClass: TrafficBarService },
  { provide: ProfitBarAnimationChartData, useClass: ProfitBarAnimationChartService },
  { provide: TemperatureHumidityData, useClass: TemperatureHumidityService },
  { provide: SolarData, useClass: SolarService },
  { provide: TrafficChartData, useClass: TrafficChartService },
  { provide: StatsBarData, useClass: StatsBarService },
  { provide: CountryOrderData, useClass: CountryOrderService },
  { provide: StatsProgressBarData, useClass: StatsProgressBarService },
  { provide: VisitorsAnalyticsData, useClass: VisitorsAnalyticsService },
  { provide: SecurityCamerasData, useClass: SecurityCamerasService },

  { provide: GudangData, useClass: GudangService },
  { provide: PegawaiData, useClass: PegawaiService },
  { provide: SupplierData, useClass: SupplierService },
  { provide: CustomerData, useClass: CustomerService },
  { provide: GolonganData, useClass: GolonganService },
  { provide: AreaData, useClass: AreaService },
  { provide: SalesData, useClass: SalesService },
  { provide: SatuanData, useClass: SatuanService },
  { provide: BarangData, useClass: BarangService },
  { provide: KategoriPengeluaranData, useClass: KategoriPengeluaranService },

  { provide: SaldoKasData, useClass: SaldoKasService },
  { provide: PembelianData, useClass: PembelianService },
  { provide: PembelianData2, useClass: Pembelian2Service },
  { provide: PenjualanData, useClass: PenjualanService },
  { provide: PenjualanData2, useClass: Penjualan2Service },
  { provide: ReturPembelianData, useClass: ReturPembelianService },
  { provide: ReturPembelianData2, useClass: ReturPembelian2Service },
  { provide: ReturPenjualanData, useClass: ReturPenjualanService },
  { provide: ReturPenjualanData2, useClass: ReturPenjualan2Service },
  { provide: PembayaranFeeData, useClass: PembayaranFeeService },
  { provide: SaldoAwalPiutangData, useClass: SaldoAwalPiutangService },
  { provide: BayarHutangSupplierData, useClass: BayarHutangSupplierService },
  { provide: BayarHutangSupplierData2, useClass: BayarHutangSupplier2Service },
  { provide: BayarHutangCustomerData, useClass: BayarHutangCustomerService },
  { provide: BayarHutangCustomerData2, useClass: BayarHutangCustomer2Service },
  { provide: MutasiBarangData, useClass: MutasiBarangService },
  { provide: MutasiBarangData2, useClass: MutasiBarang2Service },
  { provide: StockOpnameData, useClass: StockOpnameService },
  { provide: StockOpnameData2, useClass: StockOpname2Service },
  { provide: PengeluaranData, useClass: PengeluaranService },
  { provide: PengeluaranData2, useClass: Pengeluaran2Service },

  { provide: PurcaseOrderData, useClass: PurcaseOrderService },
  { provide: PurcaseOrderData2, useClass: PurcaseOrder2Service },
  { provide: CuttingData, useClass: CuttingService },
  { provide: CuttingData2, useClass: Cutting2Service },
  { provide: EmborderyData, useClass: EmborderyService },
  { provide: EmborderyData2, useClass: Embordery2Service },
  { provide: SewingData, useClass: SewingService },
  { provide: SewingData2, useClass: Sewing2Service },
  { provide: FinishingData, useClass: FinishingService },
  { provide: FinishingData2, useClass: Finishing2Service },
  { provide: FinishingData3, useClass: Finishing3Service },
  { provide: PembayaranHarianData, useClass: PembayaranHarianService },
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({

    strategies: [
      NbDummyAuthStrategy.setup({
        name: 'email',
        delay: 3000,
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
