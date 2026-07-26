export class M1RoutingEngine {
  public static calculateBuffer(hour: number, isWeekend: boolean): number {
    let trafficMultiplier = 1.0;

    if (!isWeekend) {
      if (hour >= 7 && hour <= 9) trafficMultiplier = 1.45; // Brisbane morning rush
      if (hour >= 15 && hour <= 18) trafficMultiplier = 1.50; // Gold Coast afternoon rush
    } else {
      if (hour >= 9 && hour <= 12) trafficMultiplier = 1.25; // Weekend beach transit
    }

    return trafficMultiplier;
  }
}
