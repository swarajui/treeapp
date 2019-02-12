import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { of as observableOf } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';

export interface FileNode {
  name: string;
  type: string;
  children?: FileNode[];
}
export interface FlatTreeNode {
  name: string;
  type: string;
  level: number;
  expandable: boolean;
}
@Component({
  selector: 'app-mytree',
  templateUrl: './mytree.component.html',
  styleUrls: ['./mytree.component.css']
})
export class MytreeComponent {
  treeControl: FlatTreeControl<FlatTreeNode>;
  treeFlattener: MatTreeFlattener<FileNode, FlatTreeNode>;
  dataSource: MatTreeFlatDataSource<FileNode, FlatTreeNode>;

  constructor() {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren);

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = [
      {
        name: 'Crop commodities', type: 'folder',
        children: [
          {  name: 'BT', type: 'folder' },
          {  name: 'NT', type: 'folder',
            children: [
              { name: 'Fruits', type: 'folder' },
              { name: 'Herbs and spices', type: 'folder' },
              { name: 'Grasses', type: 'folder' },
              { name: 'Nuts and seeds', type: 'folder' },
              { name: 'Vegetables', type: 'folder',
                children: [
                  { name: 'BT', type: 'folder' },
                  { name: 'RT', type: 'folder' },
                  { name: 'NT', type: 'folder',
                  children: [
                    { name: 'Vegetables without sauce, including icecream corn and stewed tomatoes', type: 'folder' },
                    { name: 'Vegetables with sauce', type: 'folder' },
                    { name: 'Vegetables primarily used for garnish or flavouring, fresh, canned or frozen, but not dried', type: 'folder' },
                    { name: 'Seaweed', type: 'folder' },
                    { name: 'Lettuce and sprouts', type: 'folder' },
                    { name: 'Vegetable juice and vegetable drink', type: 'folder' },
                  ] },
                  { name: 'UF', type: 'folder' },              
                   ]},
              { name: 'Processing Crop', type: 'folder' },
              { name: 'Food crops', type: 'folder' },
              { name: 'Stalk and stem crops', type: 'folder' },
                ]
              },
            
            ]
          }
        ]
    ;
  }

  transformer(node: FileNode, level: number) {
    return {
      name: node.name,
      type: node.type,
      level: level,
      expandable: !!node.children
    };
  }
  getLevel(node: FlatTreeNode) {
    return node.level;
  }
  isExpandable(node: FlatTreeNode) {
    return node.expandable;
  }
  hasChild(index: number, node: FlatTreeNode) {
    return node.expandable;
  }
  getChildren(node: FileNode) {
    return observableOf(node.children);
  }
}