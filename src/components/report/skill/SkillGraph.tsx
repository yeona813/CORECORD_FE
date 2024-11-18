import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import * as S from './SkillGraph.Style';
import { useTheme } from 'styled-components';
import { getGraph } from '@/api/Graph';
import { SkillData } from '@/types/SkillData';

export const SkillGraph = () => {
  const theme = useTheme();
  const [chartData, setChartData] = useState<SkillData[]>([]);

  useEffect(() => {
    const fetchGraphData = async () => {
      const data = await getGraph();
      if (data) {
        setChartData(data.map((skill: any) => ({
          name: skill.keyword,
          value: skill.count,
          percent: skill.percent
        })));
      }
    };
    fetchGraphData();
  }, []);

  const getChartColor = (percent: number) => {
    if (percent > 20) return theme.colors.blue200;
    if (percent > 10) return theme.colors.blue100;
    if (percent > 5) return theme.colors.yellow200;
    if (percent > 2) return theme.colors.yellow50;
    return theme.colors.gray25;
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, name }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 30;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return <S.Label x={x} y={y}>{name}</S.Label>;
  };

  return (
    <S.GraphContainer>
      <PieChart width={S.CHART_STYLES.width} height={S.CHART_STYLES.height}>
        <Pie
          data={chartData}
          innerRadius={S.CHART_STYLES.innerRadius}
          outerRadius={S.CHART_STYLES.outerRadius}
          paddingAngle={S.CHART_STYLES.paddingAngle}
          {...S.CHART_STYLES.pieProps}
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={getChartColor(entry.percent)}
            />
          ))}
        </Pie>
      </PieChart>
    </S.GraphContainer>
  );
};