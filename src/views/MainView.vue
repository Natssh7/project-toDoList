<template>
  <LogoutHeader/>
  <div class="min-h-[53rem] bg-my-image bg-no-repeat bg-cover bg-center bg-fixed">
    <div class="container mx-auto p-4">
      <div class="center justify-center block mb-4 lg-rounded bg-gray-300 h-[12rem] m-w-[55rem] space-y-4">
        <div class="flex center justify-center">
          <h1 class="text-3xl font-bold mr-4 p-2 rounded">To-Do List</h1>
        </div>
        <div class="flex items-center justify-center">
          <input
            class="shadow appearance-none border rounded px-[2rem] mx-[1rem] h-[6rem] w-11/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Goal description"
            v-model="goalDescription"
          />
        </div>
      </div>
      <div class="flex flex-col">
        <div v-for="task in tasks"
          :key="task.id"
          :task="task"
          :removeTask="removeTask"
        >
          <div class="flex items-center justify-between mb-2 bg-gray-300 p-2 rounded">
            <p class="text-gray-700 w-3/4">{{ task.description }} : {{ task.name }}</p>
            <div class="flex space-x-2">
              <div class="flex items-center">
                <input
                  type="radio"
                  :id="'to-do-' + task.id"
                  :name="'status-' + task.id"
                  class="form-radio h-7 w-7"
                  :value="'To-Do'"
                  v-model="task.status"
                >
                <label :for="'to-do-' + task.id" class="block ml-2 text-sm font-medium text-gray-700">To-Do</label>
              </div>
            <div class="flex items-center">
              <input
                type="radio"
                :id="'doing-' + task.id"
                :name="'status-' + task.id"
                class="form-radio h-7 w-7"
                :value="'Doing'"
                v-model="task.status"
              >
              <label :for="'doing-' + task.id" class="block ml-2 text-sm font-medium text-gray-700">Doing</label>
            </div>
            <div class="flex items-center">
              <input
                type="radio"
                :id="'done-' + task.id"
                :name="'status-' + task.id"
                class="form-radio h-7 w-7"
                :value="'Done'"
                v-model="task.status"
              >
              <label :for="'done-' + task.id" class="block ml-2 text-sm font-medium text-gray-700">Done</label>
            </div>
            <button
              class="p-1 bg-red-500 hover:bg-red-700 text-white rounded focus:outline-none focus:shadow-outline ml-4"
              @click="removeTask(task.id)"
            >
              Remove
            </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mb-4">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Add new task description"
          v-model="newTaskDescription"
        />
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="addTask"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LogoutHeader from '@/components/LogoutHeader.vue'
import TaskDataService from '@/services/TaskDataService.js'

export default {
  components: {
    LogoutHeader
  },
  data () {
    return {
      newTaskDescription: '',
      goalDescription: '',
      tasks: []
    }
  },
  /* mounted () {
    TaskDataService.getAll()
      .then(response => {
        this.tasks = response.data
        console.log('Task data', this.tasks)
      })
  }, */
  mounted () {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks)
    }
    TaskDataService.getAll()
      .then(response => {
        this.tasks = response.data
        console.log('Task data', this.tasks)
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      })
      .catch(error => {
        console.error('Error fetching tasks:', error)
      })
  },
  methods: {
    addTask () {
      // Define the new task object
      const newTask = {
        name: this.newTaskDescription,
        description: this.goalDescription,
        status: 'To-Do'
      }

      // Use the TaskDataService instance to send a POST request to your server
      TaskDataService.create(newTask)
        .then(response => {
        // If the task is successfully created on the server, add it to the tasks array
        // Assuming the server responds with the created task object, including its ID
          this.tasks.push(response.data)
          this.newTaskDescription = ''
          localStorage.setItem('tasks', JSON.stringify(this.tasks))
        })
        .catch(error => {
          console.error('There was a problem adding the task:', error)
        })
    },
    markDone (id, status) {
      const task = this.tasks.find((t) => t.id === id)
      if (task) {
        task.status = status
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    },
    removeTask (id) {
      this.tasks = this.tasks.filter((t) => t.id !== id)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    updateTasks (index, data) {
      this.tasks[index].name = data.name
      this.tasks[index].description = data.description
      this.tasks[index].status = data.status
    }
  }
}
</script>
