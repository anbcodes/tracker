<template>
  <v-app>
    <v-container>
      <v-card>
        <v-toolbar>
          <v-btn icon small @click="addDay(-1)">
            <v-icon>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-toolbar-title><span class="heading">{{currentDay}}</span></v-toolbar-title>
          <v-btn icon small @click="addDay(1)">
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-toolbar>
        <v-row class="ma-5">
          <v-col lg="3" md="6" sm="12">
            <v-combobox
              label="Breakfast"
              :items="All['Breakfast']"
              v-model="data[currentDay]['Breakfast']"
              multiple
              chips
              deletable-chips
              no-data-text="Press enter to add new value"
            />
            
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <v-text-field label="Breakfast Time" v-model="data[currentDay]['Breakfast Time']"/>
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <v-combobox
              label="Lunch"
              :items="All['Lunch']"
              v-model="data[currentDay]['Lunch']"
              multiple
              no-data-text="Press enter to add new value"
              chips
              deletable-chips
            />
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <v-text-field label="Lunch Time" v-model="data[currentDay]['Lunch Time']"/>
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <v-combobox
              label="Dinner"
              :items="All['Dinner']"
              v-model="data[currentDay]['Dinner']"
              multiple
              no-data-text="Press enter to add new value"
              chips
              deletable-chips
            />
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <v-text-field label="Dinner Time" v-model="data[currentDay]['Dinner Time']"/>
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <v-combobox
              label="Snacks"
              :items="All['Snacks']"
              v-model="data[currentDay]['Snacks']"
              multiple
              no-data-text="Press enter to add new value"
              chips
              deletable-chips
            />
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <v-container>
              Times:
              <v-row v-for="snack in data[currentDay]['Snacks']" :key="snack">
                <v-text-field :label="snack" v-model="data[currentDay]['Snacks Times'][snack]"/>
              </v-row>
            </v-container>
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <v-combobox
              label="Activities"
              :items="All['Activities']"
              v-model="data[currentDay]['Activities']"
              multiple
              no-data-text="Press enter to add new value"
              chips
              deletable-chips
            />
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <v-container>
              Times:
              <v-row v-for="activity in data[currentDay]['Activities']" :key="activity">
                <v-text-field :label="activity" v-model="data[currentDay]['Activity Times'][activity]"/>
              </v-row>
            </v-container>
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <v-text-field label="Wake Up Time" v-model="data[currentDay]['Wake Up Time']"/>
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <v-text-field label="School Start" v-model="data[currentDay]['School Start']"/>
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <v-text-field label="School End" v-model="data[currentDay]['School End']"/>
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <v-text-field label="Lights Out" v-model="data[currentDay]['Lights Out']"/>
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <v-text-field label="Weight" v-model="data[currentDay]['Weight']" type="number" suffix="lb" />
          </v-col>
          <v-col lg="12" md="12" sm="12">
            <v-textarea v-model="data[currentDay]['Notes']"/>
          </v-col>
        </v-row>
        <v-btn @click="copy"> 
          copy
        </v-btn>
        <v-btn @click="enter"> 
          enter id
        </v-btn>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import compresser from './plugins/compresser'
export default {
  name: 'App',
  created() {
    this.addDateFormat()
    window.addEventListener("message", function(event) {
      // We only accept messages from ourselves
      if (event.source != window) {
          return;
      }
      if (event.data.type !== 'DATA_WEBSITE_TRACKER') {
          return;
      }
      console.log("received: ", event.data.data)
      this.data = event.data.data
    }, false);
  },
  data: () => ({
    data: compresser.decompress(window.localStorage.getItem("DATA")) || {},
    currentDay: new Date().toISOString().slice(0, 10),
    All: {},
    dataFormat: {
      'Breakfast': [],
      'Breakfast Time': "",
      'Lunch': [],
      'Lunch Time': "",
      'Dinner': [],
      'Dinner Time': "",
      'Snacks': [],
      'Snacks Times': {},
      'Activities': [],
      'Activity Times': {},
      'Wake Up time': "",
      'School Start': "",
      'School End': "",
      'Lights Out': "",
      'Weight': 0,
      'Notes': ''
    }
  }),
  watch: {
    data: {
      handler() {
        console.log("compress", compresser.compress(this.data))
        console.log("decompress", compresser.decompress(compresser.compress(this.data)))
        window.localStorage.setItem("DATA", compresser.compress(this.data));
        this.computeAll()
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    computeAll() {
      let All = {}
      Object.keys(this.dataFormat).forEach((v) => {
        let temp = Object.values(this.data).map((value) => value[v]).flat()
        All[v] = [...new Set(temp)]
      })
      let Alltemp = [...All["Breakfast"], ...All["Lunch"], ...All["Dinner"]]
      All["Breakfast"] = Alltemp
      All["Lunch"] = Alltemp
      All["Dinner"] = Alltemp
      this.All = All
      console.log("ALL", this.All)
    },
    addDay(days) {
      const copy = new Date(this.currentDay)
      copy.setDate(copy.getDate() + days)
      console.log("Date:", copy.toISOString().slice(0, 10))
      this.dataFormat.date = copy.toISOString().slice(0, 10)
      this.addDateFormat(copy.toISOString().slice(0, 10))

      this.currentDay = copy.toISOString().slice(0, 10)
      this.$nextTick(() => {this.$forceUpdate()})
    },
    addDateFormat(day) {
      if (this.data[day || this.currentDay]) {
        return
      }
      this.$set(this.data, day || this.currentDay, { ...this.dataFormat})
      console.log("Data: ", this.data)
    },
    copy() {
      let el = document.createElement("input")
      el.type = 'text'
      el.value = compresser.compress(this.data)
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      el.remove()
      alert("id copied to clipboard")
    },
    enter() {
      this.data = compresser.decompress(prompt("Id")) || this.data
    }
  }
};
</script>
