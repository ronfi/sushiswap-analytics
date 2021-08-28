import {
  AppShell,
  AreaChart,
  BarChart,
  PairTable,
  PoolTable,
  Search,
  TokenTable,
} from "app/components";
import { Box, Grid, Paper, Button } from "@material-ui/core";
import React, { useState } from "react";
import {
  dayDatasQuery,
  getApollo,
  getDayData,
  getEthPrice,
  getOneDayEthPrice,
  getPairs,
  getPools,
  getSevenDayEthPrice,
  getTokens,
  pairsQuery,
  poolsQuery,
  tokensQuery,
  useInterval,
} from "app/core";

import Head from "next/head";
import { ParentSize } from "@visx/responsive";
import { useQuery } from "@apollo/client";


function ExportToFile(pairs, tokens) {
  // exportObjectAsJson(poolDatas)
  console.log('ExportToFile --- 1111111');

  const tokenMap = new Map();
  tokens.forEach(token => {
    tokenMap.set(token.symbol, token.decimals);
  });

  const jsonArray = [];
  pairs.forEach(pair => {
    const token0 = pair.token0;
    const token1 = pair.token1;
    const token0Map = tokenMap.get(token0.symbol);
    const token1Map = tokenMap.get(token1.symbol);

    if (!token0Map) {
      console.log('unrecogonized token: ' + token0);
      return;
    }

    if (!token1Map) {
      console.log('unrecogonized token: ' + token1);
      return;
    }
    
    const token0Update = {
      address:    token0.id,
      decimals:   token0Map.decimals,
      derivedETH: token0.derivedETH,
      name:       token0.name,
      symbol:     token0.symbol,
    };
    const token1Update = {
      address:    token1.id,
      decimals:   token1Map.decimals,
      derivedETH: token1.derivedETH,
      name:       token1.name,
      symbol:     token1.symbol,
    };
    const element = {
      poolAddress: pair.id,
      token0: token0Update,
      token1: token1Update,
      feeTier: 3000,
    };
    jsonArray.push(element);
  });

  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(jsonArray))
  const downloadAnchorNode = document.createElement('a')
  downloadAnchorNode.setAttribute('href', dataStr)
  downloadAnchorNode.setAttribute('download', 'sushi_pools.json')
  document.body.appendChild(downloadAnchorNode) // required for firefox
  downloadAnchorNode.click()
  downloadAnchorNode.remove()

  console.log('ExportToFile --- 2222222');
}


function IndexPage() {
  const {
    data: { tokens },
  } = useQuery(tokensQuery);

  const {
    data: { pairs },
  } = useQuery(pairsQuery);

  const {
    data: { pools },
  } = useQuery(poolsQuery, {
    context: {
      clientName: "masterchef",
    },
  });

  const {
    data: { dayDatas },
  } = useQuery(dayDatasQuery);

  useInterval(
    () =>
      Promise.all([
        getPairs,
        getPools,
        getTokens,
        getDayData,
        getOneDayEthPrice,
        getSevenDayEthPrice,
      ]),
    60000
  );

  const [liquidity, volume] = dayDatas
    .filter((d) => d.liquidityUSD !== "0")
    .reduce(
      (previousValue, currentValue) => {
        previousValue[0].unshift({
          date: currentValue.date,
          value: parseFloat(currentValue.liquidityUSD),
        });
        previousValue[1].unshift({
          date: currentValue.date,
          value: parseFloat(currentValue.volumeUSD),
        });
        return previousValue;
      },
      [[], []]
    );

  return (
    <AppShell>
      <Head>
        <title>Dashboard | SushiSwap Analytics</title>
      </Head>
      <Box mb={3}>
        <Search pairs={pairs} tokens={tokens} />
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper variant="outlined" style={{ height: 300 }}>
            <ParentSize>
              {({ width, height }) => (
                <AreaChart
                  title="Liquidity"
                  width={width}
                  height={height}
                  data={liquidity}
                  margin={{ top: 125, right: 0, bottom: 0, left: 0 }}
                  tooltipDisabled
                  overlayEnabled
                />
              )}
            </ParentSize>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper
            variant="outlined"
            style={{ height: 300, position: "relative" }}
          >
            <ParentSize>
              {({ width, height }) => (
                <BarChart
                  title="Volume"
                  width={width}
                  height={height}
                  data={volume}
                  margin={{ top: 125, right: 0, bottom: 0, left: 0 }}
                  tooltipDisabled
                  overlayEnabled
                />
              )}
            </ParentSize>
          </Paper>
        </Grid>

        <Button color="primary" onClick={() => ExportToFile(pairs, tokens)}>Export</Button>

        <Grid item xs={12}>
          <PairTable title="Top Sushi Liquidity Pairs" pairs={pairs} />
        </Grid>

        <Grid item xs={12}>
          <TokenTable title="Top Tokens" tokens={tokens} />
        </Grid>

        <Grid item xs={12}>
          <PoolTable
            title="Sushi Reward Pools"
            pools={pools}
            orderBy="tvl"
            order="desc"
            rowsPerPage={25}
          />
        </Grid>
      </Grid>
    </AppShell>
  );
}

export async function getStaticProps() {
  const client = getApollo();

  await getDayData(client);

  await getEthPrice(client);

  await getOneDayEthPrice(client);

  await getSevenDayEthPrice(client);

  await getTokens(client);

  await getPairs(client);

  await getPools(client);

  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
    revalidate: 1,
  };
}

export default IndexPage;
