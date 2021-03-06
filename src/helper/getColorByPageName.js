// @flow
import {
  EPOCHS,
  LAYERS,
  TXNS,
  ATXS,
  REWARDS,
  ACCOUNTS,
  SMESHER,
  SMART_WALLET,
  BLOCKS,
  NOT_FOUND,
} from '../config/constants';

// Colors
import * as colors from '../styles/utilities/_variables.scss';

export const getColorByPageName = (pageName: string, theme?: string) => {
  switch (pageName) {
    case EPOCHS:
      return {
        textColor: colors.epochColor,
        bgColor: colors.epochBgColor,
      };
    case LAYERS:
      return {
        textColor: colors.layerColor,
        bgColor: colors.layerBgColor,
      };
    case TXNS:
      return {
        textColor: colors.transactionColor,
        bgColor: colors.transactionBgColor,
      };
    case ATXS:
      return {
        textColor: colors.activationColor,
        bgColor: theme === 'dark' ? colors.activationBgColor : colors.activationLightBgColor,
      };
    case REWARDS:
      return {
        textColor: colors.rewardsColor,
        bgColor: colors.rewardsBgColor,
      };
    case ACCOUNTS:
      return {
        textColor: colors.accountsColor,
        bgColor: colors.accountsBgColor,
      };
    case SMART_WALLET:
      return {
        textColor: colors.smartWalletColor,
        bgColor: colors.smartWalletBgColor,
      };
    case SMESHER:
      return {
        textColor: colors.smesherColor,
        bgColor: theme === 'dark' ? colors.smesherBgColor : colors.smesherLightBgColor,
      };
    case BLOCKS:
      return {
        textColor: colors.layerColor,
        bgColor: colors.layerBgColor,
      };
    case NOT_FOUND:
      return {
        textColor: colors.notFoundColor,
        bgColor: colors.notFoundBgColor,
      };
    default:
      return {
        textColor: colors.overviewColor,
        bgColor: colors.overviewBgColor,
      };
  }
};
