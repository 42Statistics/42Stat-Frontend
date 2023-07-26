import styled from '@emotion/styled';

type TextProps = Partial<{
  fontSize: string;
  fontWeight: number;
  color: string;
  preventSelect?: boolean;
}>;

export const Text = styled.p<TextProps>`
  font-size: ${({ theme, fontSize = theme.fonts.size.body2 }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme, color = theme.colors.mono.black }) => color};
  line-height: 1.5;
  user-select: ${({ preventSelect }) => preventSelect && 'none'};
`;

export const H1ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
`;

export const H1Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
`;

export const H1MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

export const H1BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const H2ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
`;

export const H2Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
`;

export const H2MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

export const H2BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const H3ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
`;

export const H3Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
`;

export const H3MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

export const H3BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Body1ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
`;

export const Body1Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
`;

export const Body1MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

export const Body1BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const ThinText = styled(Text)`
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
`;

export const MediumText = styled(Text)`
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

export const BoldText = styled(Text)`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const CaptionThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
`;

export const CaptionText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
`;

export const CaptionMediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

export const CaptionBoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const PrimaryH1ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryH1Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryH1MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryH1BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryH2ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryH2Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryH2MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryH2BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryH3ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryH3Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryH3MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryH3BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryBody1ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryBody1Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryBody1MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryBody1BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryThinText = styled(Text)`
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryMediumText = styled(Text)`
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryBoldText = styled(Text)`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryCaptionThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryCaptionText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryCaptionMediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const PrimaryCaptionBoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const AccentH1ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentH1Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentH1MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentH1BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentH2ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentH2Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentH2MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentH2BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentH3ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentH3Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentH3MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentH3BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentBody1ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentBody1Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentBody1MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentBody1BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const AccentThinText = styled(Text)`
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentText = styled(Text)`
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentMediumText = styled(Text)`
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentBoldText = styled(Text)`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentCaptionThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentCaptionText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentCaptionMediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const AccentCaptionBoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.accent.default};
`;

export const WhiteH1ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteH1Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteH1MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteH1BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h1};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteH2ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteH2Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteH2MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteH2BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteH3ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteH3Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteH3MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteH3BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteBody1ThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteBody1Text = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteBody1MediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteBody1BoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.body1};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteThinText = styled(Text)`
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteText = styled(Text)`
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteMediumText = styled(Text)`
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteBoldText = styled(Text)`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteCaptionThinText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteCaptionText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteCaptionMediumText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.mono.white};
`;

export const WhiteCaptionBoldText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.caption};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.mono.white};
`;
