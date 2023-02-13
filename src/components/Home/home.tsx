import { useEffect, FC } from 'react';

import { CurrencyInterface, CurrencyType } from '../../models';
import { useGetCurrency } from '../../hooks/useGetCurrency';
import { ExchangeRateItem } from '../ExchangeRateItem';
import { throwFakeError } from '../../helpers';
import { useAppSelector } from '../../hooks';

import './home.style.css';
import { Convertor } from '../Convertor/convertor';
import DenseAppBar from '../AppBar/app.bar';
import StickyFooter from '../Footer/footer';

export const Home: FC = () => {
  const { getCurrency } = useGetCurrency();
  const { currencies } = useAppSelector((state) => state.converter);

  useEffect(() => {
    /**
     * Throw fake error on each 5 request
     */
    throwFakeError();

    /**
     * Send request to privat API to get currencies
     */
    getCurrency();
  }, []);

  return (
    <>
      <DenseAppBar />
      <div className="container">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Currency/Current Date</th>
                <th>Buy</th>
                <th>Sell</th>
              </tr>
            </thead>
            <tbody>
              {currencies.map((currency: CurrencyInterface) => (
                <tr key={currency.ccy}>
                  <td>
                    <p>
                      {currency.ccy}/{currency.base_ccy}
                    </p>
                  </td>
                  <ExchangeRateItem value={currency} type={CurrencyType.BUY} />
                  <ExchangeRateItem value={currency} type={CurrencyType.SALE} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Convertor currencies={currencies} />
      </div>
      <StickyFooter />
    </>
  );
};
