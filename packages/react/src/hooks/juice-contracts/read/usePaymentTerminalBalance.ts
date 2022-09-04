import { useContext, useEffect } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractReadHookResponse, ProjectId } from '../../../types';
import { JuiceContext } from '../../../contexts/JuiceContext';
import { useContractReadState } from '../../../hooks/state/useContractReadState';
import { useJBSingleTokenPaymentTerminalStore } from '../contracts/useJBSingleTokenPaymentTerminalStore';

type DataType = BigNumber;

export default function usePaymentTerminalBalance({
  terminalAddress,
  projectId,
}: {
  terminalAddress: string;
  projectId: ProjectId;
}): ContractReadHookResponse<DataType> {
  const { provider } = useContext(JuiceContext);
  const {
    loading,
    data,
    error,
    actions: { setLoading, setData, setError },
  } = useContractReadState<DataType>();

  const contract = useJBSingleTokenPaymentTerminalStore();

  useEffect(() => {
    if (!contract) return;

    setLoading(true);

    contract
      .balanceOf(terminalAddress, projectId)
      .then(balance => {
        setLoading(false);
        setData(balance);
      })
      .catch(e => {
        setError(e);
      });
  }, [projectId, setLoading, setData, setError, terminalAddress, provider]);

  return { loading, data, error };
}
