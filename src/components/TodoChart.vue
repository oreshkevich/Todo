<template>
  <Bar :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { mapGetters } from 'vuex';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'BarChart',
  components: { Bar },

  computed: {
    ...mapGetters(['allTodos']),

    chartData() {
      const task = this.allTodos.map((item) => item.status);
      const objReduce = task.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;

        return acc;
      }, {});
      const keysTask = Object.keys(objReduce);
      const valuesTask = Object.values(objReduce);

      return {
        labels: [...keysTask],
        datasets: [
          {
            label: 'Data',
            backgroundColor: ['#8FBC8F', '#87CEFA', '#CD853F', '#e64e3e'],
            data: [...valuesTask],
          },
        ],
      };
    },
  },
};
</script>
