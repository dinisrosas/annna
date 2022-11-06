import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Flex, styled, darkTheme, keyframes } from '@modulz/design-system';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  borderRadius: '$3',
  backgroundColor: '$slate6',
  boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1), 0 1px 3px -1px rgba(0, 0, 0, 0.2)',
  width: '80%',
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: '$3',
    borderTopRightRadius: '$3',
  },

  '&:last-child': {
    borderBottomLeftRadius: '$3',
    borderBottomRightRadius: '$3',
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 0 2px $colors$indigoA8',
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  backgroundColor: 'transparent',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: '$untitled',
  fontSize: '$2',
  lineHeight: 1,
  color: '$hiContrast',
  boxShadow: '0 1px 0 $colors$slate6',
  '&[data-state="closed"]': { backgroundColor: '$panel' },
  '&[data-state="open"]': { backgroundColor: '$panel' },
  '@hover': {
    '&:hover': {
      backgroundColor: '$slate2',
    },
  },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  fontSize: '$2',
  color: '$slateA11',
  backgroundColor: '$slate2',
  lineHeight: 1.5,
  [`.${darkTheme} &`]: {
    backgroundColor: '$loContrast',
  },

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
});

const StyledContentText = styled('div', {
  padding: '15px 20px',
});

const StyledChevron = styled(ChevronDownIcon, {
  color: '$slate9',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

const Accordion = StyledAccordion;
const AccordionItem = StyledItem;

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof AccordionPrimitive.Trigger>
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));
const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof AccordionPrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));

export function MainHeroAccordion() {
  return (
    <Accordion type="single" defaultValue="item-1" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Palavras-chave</AccordionTrigger>
        <AccordionContent>
          Palavras-chave relevantes com volume de pesquisa por distrito/cidade, dificuldade de
          ranking, variação sazonal, abrangência dos competidores, custo p/ clique, etc.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Problemas internos/externos</AccordionTrigger>
        <AccordionContent>
          Problemas técnicos internos como estruturação incorreta de conteúdo, bugs no código,
          repetição/duplicação de conteúdo, links externos prejudiciais, etc.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Análise de domínio/links externos</AccordionTrigger>
        <AccordionContent>
          Tráfego orgânico do domínio, ranking e autoridade, quantidade e relevância de links
          externos, etc.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Relatório funcional</AccordionTrigger>
        <AccordionContent>
          Otimizações para dispositivos móveis, otimização de imagens, análise de performance e
          velocidade da página, acessibilidade, etc.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
