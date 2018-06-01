import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//Pages import
import { ApiariesPage } from '../pages/apiaries/apiaries';
import { ApiaryCreatePage } from '../pages/apiary-create/apiary-create';
import { ApiaryInnerPage } from '../pages/apiary-inner/apiary-inner';
import { FeedingPage } from '../pages/feeding/feeding';
import { FeedingCreatePage } from '../pages/feeding-create/feeding-create';
import { FeedingInnerPage } from '../pages/feeding-inner/feeding-inner';
import { HarvestPage } from '../pages/harvest/harvest';
import { HarvestCreatePage } from '../pages/harvest-create/harvest-create';
import { HarvestInnerPage } from '../pages/harvest-inner/harvest-inner';
import { HivesPage } from '../pages/hives/hives';
import { HiveCreate } from '../pages/hive-create/hive-create';
import { HiveInner } from '../pages/hive-inner/hive-inner';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { InspectInnerPage } from '../pages/inspect-inner/inspect-inner';
import { InspectCreatePage } from '../pages/inspect-create/inspect-create';
import { TabsPage } from '../pages/tabs/tabs';
import { StatsPage } from '../pages/stats/stats';
import { TreatmentPage } from '../pages/treatment/treatment';
import { TreatmentInnerPage } from '../pages/treatment-inner/treatment-inner';
import { TreatmentCreatePage } from '../pages/treatment-create/treatment-create';

// Services
import { ApiaryService } from './service/apiaryService';
import { AuthenticationService } from './service/authenticationService';
import { HiveService } from './service/hiveService';
import { ChartsModule } from 'ng2-charts';
import { InspectionService } from "./service/inspectionService";
import { DatePipe } from "@angular/common";
import { TreatmentService } from "./service/treatmentService";
import { HarvestService } from "./service/harvestService";
import { FeedingsService } from "./service/feedingsService";
import { ProfilePage } from "../pages/profile/profile";
import { ChangePasswordPage } from "../pages/change-password/change-password";
import { InfoPage } from "../pages/info/info";
import { ArraySortPipe } from "./pipe/sortPipe";



@NgModule({
    declarations: [
        MyApp,
        FeedingPage,
        FeedingCreatePage,
        FeedingInnerPage,
        HivesPage,
        HomePage,
        LoginPage,
        RegisterPage,
        TabsPage,
        HarvestPage,
        HarvestCreatePage,
        HarvestInnerPage,
        HiveCreate,
        HiveInner,
        InspectInnerPage,
        InspectCreatePage,
        ApiariesPage,
        ApiaryCreatePage,
        ApiaryInnerPage,
        StatsPage,
        TreatmentPage,
        TreatmentInnerPage,
        TreatmentCreatePage,
        ProfilePage,
        ChangePasswordPage,
        InfoPage,
        ArraySortPipe
    ],
    imports: [
        ChartsModule,
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        FeedingPage,
        FeedingCreatePage,
        FeedingInnerPage,
        HivesPage,
        HomePage,
        LoginPage,
        RegisterPage,
        TabsPage,
        HarvestPage,
        HarvestCreatePage,
        HarvestInnerPage,
        HiveCreate,
        HiveInner,
        InspectInnerPage,
        InspectCreatePage,
        ApiariesPage,
        ApiaryInnerPage,
        ApiaryCreatePage,
        StatsPage,
        TreatmentPage,
        TreatmentInnerPage,
        TreatmentCreatePage,
        ProfilePage,
        ChangePasswordPage,
        InfoPage
    ],
    providers: [
        ApiaryService,
        AuthenticationService,
        HiveService,
        InspectionService,
        TreatmentService,
        HarvestService,
        FeedingsService,
        DatePipe,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
