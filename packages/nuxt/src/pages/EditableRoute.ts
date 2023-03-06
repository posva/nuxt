import type { EditableTreeNode } from 'unplugin-vue-router'

/**
 * TODO: after checking https://github.dev/intlify/routing we need to ensure that a module author can set the children of a route with the following properties:
  - name?: string
  - path: string
  - file?: string // for nuxt bridge & nuxt 3
  - children?: Route[]
 */

export class EditableRoute {
  private _node: EditableTreeNode

  constructor (node: EditableTreeNode) {
    this._node = node
  }

  get name () {
    return this._node.name
  }

  set name (name: string) {
    this._node.name = name
  }

  // TODO: is it fullPath or path?
  get path () {
    return this._node.path
  }

  // TODO: is it fullPath or path?
  set path (path: string) {
    this._node.path = path
  }

  get file () {
    return this._node.components.get('default')
  }

  set file (file: string | undefined) {
    if (!file) {
      this._node.components.delete('default')
    } else {
      this._node.components.set('default', file)
    }
  }

  // FIXME: I need to create a proxy on children array to work with splice and other functions

  get children () {
    return [...this._node].map(node => new EditableRoute(node))
  }

  set children (routes: EditableRoute[]) {
    throw new Error('Not implemented')
  }
}
