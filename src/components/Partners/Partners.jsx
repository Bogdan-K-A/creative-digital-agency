import { Section } from '../ui-component/Section';
import { SwiperPartners } from './SwiperPartners';

export const Partners = () => {
  return (
    <Section background={p => p.theme.colors.light} padding="80px 0">
      <SwiperPartners />
    </Section>
  );
};
