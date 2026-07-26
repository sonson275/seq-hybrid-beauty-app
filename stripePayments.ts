export class StripeOnboarding {
  public static generateArtistOnboardingLink(artistId: string): string {
    const baseUrl = "https://seqsquad.app";
    
    // Generates the return redirect urls for local SEQ artists finishing Stripe Express setup
    return `${baseUrl}/onboard?id=${artistId}&country=AU&currency=aud`;
  }

  public static calculateZeroPlatformFee(totalAmountCents: number): number {
    // 100% of the funds pass directly to the independent beauty professional
    return totalAmountCents;
  }
}
