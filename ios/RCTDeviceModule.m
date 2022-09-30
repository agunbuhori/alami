// RCTCalendarModule.m
#import "RCTDeviceModule.h"

@implementation RCTDeviceModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();


RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getDeviceUID)
{
  NSString *uniqueIdentifier = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
  return uniqueIdentifier;
}

@end

