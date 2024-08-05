import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import { api } from '@/utils/client/api'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [filter, setFilter] = useState('all')

  const { data: todos = [] } = api.todo.getAll.useQuery({
    statuses: ['completed', 'pending'],
  })

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'pending') {
      return todo.status === 'pending'
    }
    if (filter === 'completed') {
      return todo.status === 'completed'
    }
    return true // for 'all' filter
  })

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="pt-10">
          <Tabs.Root
            defaultValue="all"
            orientation="horizontal"
            onValueChange={(value) => setFilter(value)}
          >
            <Tabs.List aria-label="tabs example" className="flex space-x-2">
              <Tabs.Trigger
                value="all"
                className={`rounded-full px-5 py-2 ${
                  filter === 'all'
                    ? 'bg-gray-700 text-white'
                    : 'border border-gray-200 bg-white text-gray-700'
                }`}
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger
                value="pending"
                className={`rounded-full px-5 py-2 ${
                  filter === 'pending'
                    ? 'bg-gray-700 text-white'
                    : 'border border-gray-200 bg-white text-gray-700'
                }`}
              >
                Pending
              </Tabs.Trigger>
              <Tabs.Trigger
                value="completed"
                className={`rounded-full px-5 py-2 ${
                  filter === 'completed'
                    ? 'bg-gray-700 text-white'
                    : 'border border-gray-200 bg-white text-gray-700'
                }`}
              >
                Completed
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </div>

        <div className="pt-10">
          <TodoList todos={filteredTodos} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
