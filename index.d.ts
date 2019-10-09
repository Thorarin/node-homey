import SimpleClass from './sdk/lib/SimpleClass';
import Api from './sdk/lib/Api.js';
import ApiApp from './sdk/lib/ApiApp.js';
import App from './sdk/lib/App.js';
import BleAdvertisement from './sdk/lib/BleAdvertisement.js';
import BleCharacteristic from './sdk/lib/BleCharacteristic.js';
import BleDescriptor from './sdk/lib/BleDescriptor.js';
import BlePeripheral from './sdk/lib/BlePeripheral.js';
import BleService from './sdk/lib/BleService.js';
import CloudOAuth2Callback from './sdk/lib/CloudOAuth2Callback.js';
import CloudWebhook from './sdk/lib/CloudWebhook.js';
import CronTask from './sdk/lib/CronTask.js';
import Device from './sdk/lib/Device.js';
import DiscoveryResult from './sdk/lib/DiscoveryResult.js';
import DiscoveryResultMAC from './sdk/lib/DiscoveryResultMAC.js';
import DiscoveryResultMDNSSD from './sdk/lib/DiscoveryResultMDNSSD.js';
import DiscoveryResultSSDP from './sdk/lib/DiscoveryResultSSDP.js';
import DiscoveryStrategy from './sdk/lib/DiscoveryStrategy.js';
import Driver from './sdk/lib/Driver.js';
import FlowArgument from './sdk/lib/FlowArgument.js';
import FlowCard from './sdk/lib/FlowCard.js';
import FlowCardAction from './sdk/lib/FlowCardAction.js';
import FlowCardCondition from './sdk/lib/FlowCardCondition.js';
import FlowCardTrigger from './sdk/lib/FlowCardTrigger.js';
import FlowCardTriggerDevice from './sdk/lib/FlowCardTriggerDevice.js';
import FlowToken from './sdk/lib/FlowToken.js';
import Image from './sdk/lib/Image.js';
import InsightsLog from './sdk/lib/InsightsLog.js';
import LedringAnimation from './sdk/lib/LedringAnimation.js';
import LedringAnimationSystem from './sdk/lib/LedringAnimationSystem.js';
import LedringAnimationSystemProgress from './sdk/lib/LedringAnimationSystemProgress.js';
import Manager from './sdk/lib/Manager.js';
import Notification from './sdk/lib/Notification.js';
import Signal from './sdk/lib/Signal.js';
import Signal433 from './sdk/lib/Signal433.js';
import Signal868 from './sdk/lib/Signal868.js';
import SignalInfrared from './sdk/lib/SignalInfrared.js';
import ZigBeeNode from './sdk/lib/ZigBeeNode.js';
import ZigBeeEndpoint from './sdk/lib/ZigbeeEndpoint.js';
import ZigBeeCluster from './sdk/lib/ZigbeeCluster.js';
import ZwaveCommandClass from './sdk/lib/ZwaveCommandClass.js';
import ZwaveNode from './sdk/lib/ZwaveNode.js';

import ManagerApi from './sdk/manager/api';
import ManagerApps from './sdk/manager/apps';
import ManagerArp from './sdk/manager/arp';
import ManagerAudio from './sdk/manager/audio';
import ManagerBLE from './sdk/manager/ble';
import ManagerClock from './sdk/manager/clock';
import ManagerCloud from './sdk/manager/cloud';
import ManagerCron from './sdk/manager/cron';
import ManagerDiscovery from './sdk/manager/discovery';
import ManagerDrivers from './sdk/manager/drivers';
import ManagerFlow from './sdk/manager/flow';
import ManagerGeolocation from './sdk/manager/geolocation';
import ManagerI18n from './sdk/manager/i18n';
import ManagerImages from './sdk/manager/images';
import ManagerInsights from './sdk/manager/insights';
import ManagerLedring from './sdk/manager/ledring';
import ManagerNFC from './sdk/manager/nfc';
import ManagerNotifications from './sdk/manager/notifications';
import ManagerRF from './sdk/manager/rf';
import ManagerSettings from './sdk/manager/settings';
import ManagerSpeechInput from './sdk/manager/speech-input';
import ManagerSpeechOutput from './sdk/manager/speech-output';
import ManagerZigbee from './sdk/manager/zigbee';
import ManagerZwave from './sdk/manager/zwave';

declare namespace Homey {
  const version: string;

  const SimpleClass: SimpleClass;
  const Api: Api;
  const ApiApp: ApiApp;
  const App: App;
  const BleAdvertisement: BleAdvertisement;
  const BleCharacteristic: BleCharacteristic;
  const BleDescriptor: BleDescriptor;
  const BlePeripheral: BlePeripheral;
  const BleService: BleService;
  const CloudOAuth2Callback: CloudOAuth2Callback;
  const CloudWebhook: CloudWebhook;
  const CronTask: CronTask;
  const Device: Device;
  const DiscoveryResult: DiscoveryResult;
  const DiscoveryResultMAC: DiscoveryResultMAC;
  const DiscoveryResultMDNSSD: DiscoveryResultMDNSSD;
  const DiscoveryResultSSDP: DiscoveryResultSSDP;
  const DiscoveryStrategy: DiscoveryStrategy;
  const Driver: Driver;
  const FlowArgument: FlowArgument;
  const FlowCard: FlowCard;
  const FlowCardAction: FlowCardAction;
  const FlowCardCondition: FlowCardCondition;
  const FlowCardTrigger: FlowCardTrigger;
  const FlowCardTriggerDevice: FlowCardTriggerDevice;
  const FlowToken: FlowToken;
  const Image: Image;
  const InsightsLog: InsightsLog;
  const LedringAnimation: LedringAnimation;
  const LedringAnimationSystem: LedringAnimationSystem;
  const LedringAnimationSystemProgress: LedringAnimationSystemProgress;
  const Manager: Manager;
  const Notification: Notification;
  const Signal: Signal;
  const Signal433: Signal433;
  const Signal868: Signal868;
  const SignalInfrared: SignalInfrared;
  const ZigBeeNode: ZigBeeNode;
  const ZigBeeEndpoint: ZigBeeEndpoint;
  const ZigBeeCluster: ZigBeeCluster;
  const ZwaveCommandClass: ZwaveCommandClass;
  const ZwaveNode: ZwaveNode;

  // Managers
  const ManagerApi: ManagerApi;
  const ManagerApps: ManagerApps;
  const ManagerArp: ManagerArp;
  const ManagerAudio: ManagerAudio;
  const ManagerBLE: ManagerBLE;
  const ManagerClock: ManagerClock;
  const ManagerCloud: ManagerCloud;
  const ManagerCron: ManagerCron;
  const ManagerDiscovery: ManagerDiscovery;
  const ManagerDrivers: ManagerDrivers;
  const ManagerFlow: ManagerFlow;
  const ManagerGeolocation: ManagerGeolocation;
  const ManagerI18n: ManagerI18n;
  const ManagerImages: ManagerImages;
  const ManagerInsights: ManagerInsights;
  const ManagerLedring: ManagerLedring;
  const ManagerNFC: ManagerNFC;
  const ManagerNotifications: ManagerNotifications;
  const ManagerRF: ManagerRF;
  const ManagerSettings: ManagerSettings;
  const ManagerSpeechInput: ManagerSpeechInput;
  const ManagerSpeechOutput: ManagerSpeechOutput;
  const ManagerZigbee: ManagerZigbee;
  const ManagerZwave: ManagerZwave;
}